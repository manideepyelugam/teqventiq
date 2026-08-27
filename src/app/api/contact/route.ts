import { NextResponse } from "next/server";

const DEFAULT_API_URL = "https://teqventiq.com/api/form/submission";
const DEFAULT_API_TOKEN =
  "6dffbce0f3340384a7c7bf0e19efa2b38797643b51d1d65e830c678ad0a58c73";

export async function POST(request: Request) {
  try {
    let payload: Record<string, unknown> = {};

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      payload = await request.json();
    }

    // Basic validation
    const { firstName, email, message, turnstileToken } = payload as {
      firstName?: string;
      email?: string;
      message?: string;
      turnstileToken?: string;
    };

    if (!firstName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields (First Name, Email, Message).",
        },
        { status: 400 }
      );
    }

    // Cloudflare Turnstile CAPTCHA Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json(
          {
            success: false,
            error: "Please complete the CAPTCHA security verification before submitting.",
          },
          { status: 400 }
        );
      }

      const clientIp =
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        undefined;

      try {
        const verifyBody = new URLSearchParams();
        verifyBody.append("secret", turnstileSecret);
        verifyBody.append("response", turnstileToken);
        if (clientIp) {
          verifyBody.append("remoteip", clientIp);
        }

        const verifyResponse = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: verifyBody.toString(),
          }
        );

        const verifyData = await verifyResponse.json();

        if (!verifyData.success) {
          console.error("Turnstile verification failed:", verifyData["error-codes"]);
          return NextResponse.json(
            {
              success: false,
              error: "CAPTCHA verification failed. Please try again.",
            },
            { status: 400 }
          );
        }
      } catch (err) {
        console.error("Turnstile server verification error:", err);
        return NextResponse.json(
          {
            success: false,
            error: "CAPTCHA verification service error. Please try again later.",
          },
          { status: 500 }
        );
      }
    }

    // Clean payload without turnstile token for backend API
    const { turnstileToken: _, ...cleanPayload } = payload;

    // Backend endpoint and authorization token
    const apiUrl = process.env.FORM_API_URL || DEFAULT_API_URL;
    const apiToken = process.env.FORM_API_TOKEN || DEFAULT_API_TOKEN;

    const backendResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...cleanPayload,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error("Backend form submission failed:", backendResponse.status, errorText);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to submit message to the server. Please try again later.",
        },
        { status: backendResponse.status }
      );
    }

    const responseData = await backendResponse.json();

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected server error occurred.",
      },
      { status: 500 }
    );
  }
}
