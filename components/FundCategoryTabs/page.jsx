// components/FundCategoryTabs.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CryptoJS from "crypto-js";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function FundCategoryTabs() {
  const [activeTab, setActiveTab] = useState("Equity");
  const tabs = ["Equity", "Debt", "Hybrid", "Sol Oriented", "Others"];
const [loading, setLoading] = useState(false);
const [schemes, setSchemes] = useState([]);
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
const router= useRouter()
  const fetchSchemes = async (activeTab) => {
    const category=activeTab
    // console.log("category:", category);
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/fund-performance/fpsub-category?categorySchemes=${category}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (response.status === 200) {
        setSchemes(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching schemes:", error);
    } finally {
      setLoading(false);
    }
  };
// console.log(schemes)
   const handleCategorySelect = (category) => {
    setActiveTab(category);
    fetchSchemes(activeTab);
  };

   useEffect(() => {
      if (activeTab) {
        fetchSchemes(activeTab);
      }
    }, [activeTab]);

    const handlecategory =(item)=>{
      const dataToStore = {
      schemeName: item,
      timestamp: Date.now(),
    };

    const encrypted = CryptoJS.AES.encrypt(
    
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();

    localStorage.setItem("encryptedscheme", encrypted);
    const slug = item
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");

      router.push(`/performance/fund-performance/${slug}`);
    }

  return (
    <div className=" text-[var(--rv-white)]">
      <div className="grid grid-cols-5 gap-5 px-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 p-4 rounded-t text-[20px]  font-semibold transition-all duration-300 ${
              activeTab === tab
                ? " bg-[var(--rv-primary)]"
                : " hover:bg-[var(--rv-primary)] "
            }`}
            onClick={() => handleCategorySelect(tab)}
          >
           <div className="bg-white rounded-full p-2">
             <Image
              src={`/icons/performance/${tab.toLowerCase().replace(/ /g, "-")}.svg`}
              alt={tab}
              width={36}
              height={36}
              className=""
            />
           </div>
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-[var(--rv-primary)] rounded-xl p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {schemes.map((item, idx) => (
      <div
        key={idx}
        className="group flex items-center px-4 justify-between rounded-lg hover:scale-110 transition-all cursor-pointer"
        onClick={() => handlecategory(item)}
      >
        {/* Left: Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="bg-[var(--rv-ternary)] rounded-full p-2">
            <Image
              src={`/icons/performance/${activeTab.toLowerCase().replace(/\s+/g, '')}/${idx}.svg`}
              alt={activeTab}
              width={32}
              height={32}
            />
          </div>
          <div className="text-sm font-medium text-[var(--rv-white)]">{item}</div>
        </div>

        {/* Right: Arrow Icon */}
        <div className="p-1 rounded-full transition-all group-hover:bg-white group-hover:p-2 group-hover:-rotate-45">
          <FaArrowRight className="text-[var(--rv-white)] group-hover:text-[var(--rv-ternary)] transition-all" />
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
