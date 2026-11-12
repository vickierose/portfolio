import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viktoriia Chernyshuk — Frontend & Design",
  description: "Frontend engineering, UI and interaction design, and creative development. Turning complex product ideas into clear, expressive interfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-8 lg:px-16">
          <a className="absolute -top-25 focus:top-3 focus:z-10 focus:bg-accent focus:p-3" href="#main">Skip to content</a>
          <Header />
          <main className="flex-1" id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



