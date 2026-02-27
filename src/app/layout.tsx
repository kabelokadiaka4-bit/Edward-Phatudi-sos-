import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edward Phatudi Maths, Science & ICT School of Specialisation",
  description: "Gauteng's pioneering nuclear science school, preparing learners for careers in nuclear energy, technology, engineering, and scientific research through world-class STEM education and NECSA partnership.",
  keywords: ["Edward Phatudi", "School of Specialisation", "Nuclear Science", "STEM Education", "Gauteng", "NECSA", "Maths", "Science", "ICT"],
  authors: [{ name: "Edward Phatudi School" }],
  icons: {
    icon: "/images/logo-new.png",
  },
  openGraph: {
    title: "Edward Phatudi School of Specialisation",
    description: "Gauteng's pioneering nuclear science school - Where young minds transform into tomorrow's scientists",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
