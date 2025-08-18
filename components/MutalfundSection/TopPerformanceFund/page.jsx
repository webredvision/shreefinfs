"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CryptoJS from "crypto-js";

export default function TopTaxSavingFunds() {
  const [activeTab, setActiveTab] = useState("Equity");
  const [subcategories, setSubCategories] = useState("Small Cap Fund");
  const [loading, setLoading] = useState(false);
  const [performanceData, setPerformanceData] = useState([]);
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
  const categories = ["Equity", "Hybrid", "Debt"];

  const fetchPerformanceData = async (subcategory) => {
    setLoading(true);
    try {
      const sanitizedSchemeType = subcategory.includes("&")
        ? subcategory.replace(/&/g, "%26")
        : subcategory;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/fund-performance/fp-data?categorySchemes=${sanitizedSchemeType}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      if (response.status === 200) {
        const allFunds = response.data.data || [];

        const topFunds = allFunds
          .filter(
            (fund) =>
              fund.five_year &&
              !isNaN(parseFloat(fund.five_year)) &&
              parseFloat(fund.five_year) > 0
          )
          .sort((a, b) => parseFloat(b.five_year) - parseFloat(a.five_year))
          .slice(0, 5);

        setPerformanceData(topFunds);
      }
    } catch (error) {
      console.error("Error fetching performance data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "Equity") {
      setSubCategories("Small Cap Fund");
    } else if (activeTab === "Hybrid") {
      setSubCategories("Aggressive Hybrid Fund");
    } else if (activeTab === "Debt") {
      setSubCategories("Gilt Fund");
    }
  }, [activeTab]);

  useEffect(() => {
    if (subcategories) {
      fetchPerformanceData(subcategories);
    }
  }, [subcategories]);

  const handleCategoryClick = (cat) => {
    setActiveTab(cat);
  };

  const handleSelectFunds = (fund) => {
    const dataToStore = {
      pcode: fund.pcode,
      ftype: subcategories,
      timestamp: Date.now(),
    };

    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();

    localStorage.setItem("encryptedFundPerormanceData", encrypted);
    window.location.href = "/performance/fund-performance/fund-details";
  };

  return (
    <div className="bg-[var(--rv-primary)] shadow-lg rounded-xl overflow-hidden mt-10 px-2 sm:px-4 md:px-6">
      <div className="text-center">
        <div className="flex justify-center mt-3 sm:space-x-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(cat)}
              className={`text-lg sm:text-xl md:text-2xl px-6 sm:px-10 py-3 sm:py-5 ${
                activeTab === cat
                  ? "text-[var(--rv-secondary)] border-b-2 border-[var(--rv-secondary)]"
                  : "text-[var(--rv-white)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] md:min-w-full w-full text-left text-sm md:text-lg">
          <thead className="bg-[var(--rv-ternary)] sticky top-0 z-10">
            <tr>
              <th className="p-3 md:p-4 text-white font-medium">Fund Name</th>
              <th className="p-3 md:p-4 text-white font-medium text-center">
                Corpus (₹ Cr)
              </th>
              <th className="p-3 md:p-4 text-white font-medium text-center">Nav</th>
              <th className="p-3 md:p-4 text-white font-medium text-center">
                5-Year Return
              </th>
              <th className="p-3 md:p-4 text-white font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((fund, index) => (
              <tr
                key={index}
                className="text-white cursor-pointer hover:bg-[var(--rv-ternary)] transition"
                onClick={() => handleSelectFunds(fund)}
              >
                <td className="p-3 md:p-4">
                  <div className="flex flex-col">
                    <span className="font-semibold">{fund.funddes}</span>
                    <span className="text-sm text-gray-400">{fund.schemeCategory}</span>
                  </div>
                </td>
                <td className="text-center p-3 md:p-4">₹{fund?.Corpus} Cr</td>
                <td className="text-center p-3 md:p-4">
                  ₹
                  {fund?.fiveyear_navEndDate ||
                    fund?.threeyear_navEndDate ||
                    fund?.oneyear_navEndDate ||
                    fund?.sixmonth_navEndDate ||
                    fund?.onemonth_navEndDate ||
                    fund?.oneweek_navEndDate ||
                    "0.00"}
                </td>
                <td className="text-center p-3 md:p-4 text-green-500 font-semibold">
                  {fund?.five_year ||
                    fund?.three_year ||
                    fund?.one_year ||
                    fund?.six_month ||
                    fund?.one_month ||
                    fund?.one_week ||
                    "0.00"}
                  %
                </td>
                <td className="text-center p-3 md:p-4">
                  <Link href="/login">
                    <button
                      className="bg-[var(--rv-secondary)] text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 text-sm md:text-base"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Invest
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center text-sm text-gray-400 mt-2 md:hidden">
          Swipe to view full table →
        </p>
      </div>

      <div className="text-center p-4">
        <Link className="" href={"/performance/fund-performance"}>
          <button className="text-[var(--rv-secondary)] text-base md:text-xl hover:underline">
            Show all top performing Funds
          </button>
        </Link>
      </div>
    </div>
  );
}
