import { ContactFormData, FormSubmissionResponse } from "@/core/types";

/**
 * Submits contact form data to the internal API route handler.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<FormSubmissionResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to submit form. Please try again.",
      };
    }

    return {
      success: true,
      message: result.message || "Thank you! Your message has been sent successfully.",
      data: result.data,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
    };
  }
}
