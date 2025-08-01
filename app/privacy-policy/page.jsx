"use client";
import { siteSettings } from "@/data/sitesetting";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PrivacyPolicy() {
    const [data, setData] = useState('');
    const fetchPolicy = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/privacy-policy?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (response.status === 200 && response.data && response.data[0]) {
                const data = response.data[0];
                setData(data.pvp);
            } else {
                console.error("Invalid data format:", response.data);
                alert("Failed to fetch services. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            alert("An error occurred while fetching services. Please try again.");
        }
    };
    useEffect(() => { fetchPolicy(); }, []);
    function createMarkup() {
        const highlightedText = data
            .replace(/Your Company name/gi, `<mark style="background-color: transparent; font-size: 16px">${siteSettings?.companyName}</mark>`)
            .replace(/What we collect/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">What we collect</mark> <br/>')
            .replace(/Name and contact details/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Name and contact details</mark><br>')
            .replace(/Collection Use of image data/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Collection Use of image data</mark>')
            .replace(/Use of location data/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Use of location data</mark><br>')
            .replace(/Security/, '<br><br><mark style="background-color: transparent; font-size: 18px">Security</mark><br>')
            .replace(/Links to other websites/, '<br><br><mark style="background-color: transparent; font-size: 18px">Links to other websites</mark><br>')
            .replace(/Controlling your personal information/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Controlling your personal information</mark><br>')
            .replace(/Security certificates/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Security certificates</mark><br>')
        return { __html: highlightedText };
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-cyan-50 md:py-5 py-0">
            <div className="max-w-screen-lg justify-center mx-auto">
                <div className="p-8 rounded-t-3xl bg-gradient-to-br from-yellow-100 to-white">
                    <h1 className="text-2xl text-center font-semibold text-gray-800">Welcome to</h1>
                    <h2 className="text-3xl text-center font-bold text-teal-600 mb-4">
                        {siteSettings.siteName}
                    </h2>
                    <p dangerouslySetInnerHTML={createMarkup()} className="text-gray-800 my-6" />
                </div>
                <Footer />
            </div>
        </div>
    );
}
