import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Run with a Purpose",
  description: "Running brought to you by local businesses in Chicago & more!",
};
import SideNav from '@/app/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col md:flex-row bg-white text-stone-800`}
      >
        <div className="w-full flex-none md:w-64 bg-blue-300">
          <SideNav />
        </div>
        <div className="flex-grow overflow-y-auto bg-blue-300 w-full p-2">{children}</div>

      </body>
    </html>
  );
}
