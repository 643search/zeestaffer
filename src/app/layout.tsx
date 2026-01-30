import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZeeStaffer | Global Talent for Franchise Success",
  description:
    "ZeeStaffer connects franchisees with pre-vetted, trained remote talent at a fraction of the cost. Scale your franchise operations with dedicated global staff.",
  keywords: [
    "franchise staffing",
    "remote talent",
    "virtual assistants",
    "franchise operations",
    "offshore staffing",
    "franchise support",
  ],
  openGraph: {
    title: "ZeeStaffer | Global Talent for Franchise Success",
    description:
      "Connect with pre-vetted, trained remote talent at a fraction of the cost. Scale your franchise operations with dedicated global staff.",
    type: "website",
    locale: "en_US",
    siteName: "ZeeStaffer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeStaffer | Global Talent for Franchise Success",
    description:
      "Connect with pre-vetted, trained remote talent at a fraction of the cost. Scale your franchise operations with dedicated global staff.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
