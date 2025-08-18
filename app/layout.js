import "./globals.css";
import { Audiowide } from "next/font/google";
import RenewalPopup from "@/components/renewalPopup";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { getSiteData } from "@/lib/functions";

const merriweather = Audiowide({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400"],
});

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const siteData = await getSiteData();
  return {
    title: {
      default: siteData?.websiteName || "",
      template: `%s - ${siteData?.websiteName || ""}`,
    },
    description:
      siteData?.websiteName || "",
    openGraph: {
      title: siteData?.websiteName || "",
      description: siteData?.description || "",
      type: "website",
      locale: "en_IN",
      siteName: siteData?.websiteName || "",
      url: siteData?.callbackurl || "",
      // images: ["https://100takka.com/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: siteData?.websiteName || "",
      description: siteData?.description || "",
    },
    authors: [siteData?.websiteName || ""] || [],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable}`}>
        <SubscriptionProvider>
          <RenewalPopup />
          <div className="">
            {children}
          </div>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
