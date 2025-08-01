"use client";
import { siteSettings } from "@/data/sitesetting";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="rounded-b-3xl w-full text-center text-md py-2 bg-gradient-to-r from-yellow-300 to-cyan-400 text-gray-600">
            <p>
                © 2025 <strong>{siteSettings.siteName}</strong> | Owned by{" "}
                <strong>{siteSettings.companyName}</strong>. All
                rights reserved.
                <br />
                <Link href="/contact-us" className="underline mr-2">
                    Contact Us
                </Link>
                |{" "}
                <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/" className="underline">
                    Go to Home
                </Link>
            </p>
        </footer>
    );
}
