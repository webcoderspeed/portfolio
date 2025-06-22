import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjeev Sharma - Full Stack Developer | WebCoderSpeed",
  description:
    "Professional Full Stack Developer with 4+ years of experience in Next.js, React, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords:
    "Full Stack Developer, Next.js, React, Node.js, TypeScript, JavaScript, Web Development, Freelancer",
  authors: [{ name: "Sanjeev Sharma" }],
  openGraph: {
    title: "Sanjeev Sharma - Full Stack Developer",
    description:
      "Professional Full Stack Developer specializing in modern web technologies",
    url: "https://webcoderspeed.dev",
    siteName: "WebCoderSpeed",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} noise-overlay`}
        suppressHydrationWarning
      >
        <Analytics />
        <ThemeProvider defaultTheme="dark" storageKey="webcoderspeed-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
