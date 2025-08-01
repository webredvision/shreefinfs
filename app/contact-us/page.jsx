"use client";
import { FaEnvelope, FaPhone, FaSearchLocation } from "react-icons/fa";
import { siteSettings } from "@/data/sitesetting";
import Footer from "@/components/footer/footer";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-cyan-50 md:py-5 py-0">
            <div className="max-w-screen-lg justify-center mx-auto">
                <div className="p-8 rounded-t-3xl shadow-lg bg-gradient-to-br from-yellow-100 to-white">
                    <h1 className="text-2xl text-center font-semibold text-gray-800">Welcome to</h1>
                    <h2 className="text-3xl text-center font-bold text-teal-600 mb-4">
                        {siteSettings.siteName}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-5 text-right">
                        <div className="flex flex-col items-center gap-5 text-gray-600 ring ring-[var(--primary)] p-6 rounded">
                            <FaEnvelope size={30} className="text-[var(--primary)]" />
                            <span>{siteSettings.siteEmail}</span>
                        </div>
                        <div className="flex flex-col items-center gap-5 text-gray-600 ring ring-[var(--primary)] p-6 rounded">
                            <FaPhone size={30} className="text-[var(--primary)]" />
                            <span>+91 {siteSettings.siteMobile}</span>
                        </div>
                        <div className="flex flex-col items-center gap-5 text-gray-600 ring ring-[var(--primary)] p-6 rounded">
                            <FaSearchLocation size={30} className="text-[var(--primary)]" />
                            <span>{siteSettings.siteAddress}</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded my-4">
                        <iframe src={siteSettings.siteMap} width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
