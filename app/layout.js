import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/data/sitesetting";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: siteSettings.siteName,
  description: siteSettings.siteName,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/doodlebg.svg')] bg-cover bg-center bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
