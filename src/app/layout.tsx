import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Teqventiq Services | Where Technology Meets Business Intelligence",
  description: "Empowering organizations with secure, scalable, and modern technology solutions. Cybersecurity, Networking, Data & AI, Datacentre, and Managed Support Services.",
};

import { Header, Footer, WhatsAppButton } from "@/components/shared";
import { ContactPopup } from "@/components/contact";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${sora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="wrapper">
            <Header />
            <main className="page">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <ContactPopup />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
