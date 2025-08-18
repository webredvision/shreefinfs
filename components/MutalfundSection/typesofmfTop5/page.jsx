"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CryptoJS from "crypto-js";
import TopFundskeleton from "@/components/skeletons/topFundskeleton";

export default function TopPerformingFunds() {
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
          .sort(
            (a, b) => parseFloat(b.five_year) - parseFloat(a.five_year)
          )
          .slice(0, 3);

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
    <div>
      <section className="text-[var(--rv-white)] overflow-hidden">
        <div className="w-full bg-gradient-to-br from-[var(--rv-bg-secondary)] to-[var(--rv-secondary)] rounded-2xl p-4 lg:p-8">
          {/* <h2 className="text-[var(--rv-white)] text-center text-3xl font-bold mb-2">
            Popular Funds
          </h2>
          <p className="text-blue-100 text-lg text-center mb-6">
            Explore trusted funds with proven returns
          </p> */}

          {/* Category Tabs */}
          <div className="flex gap-2  flex-wrap items-center justify-center">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-t font-medium ${activeTab === cat
                  ? "bg-[var(--rv-secondary)] text-[var(--rv-white)]"
                  : "bg-[var(--rv-white)] text-[var(--rv-black)] hover:bg-[var(--rv-secondary)] hover:text-[var(--rv-text)]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Table Display */}
          <div className="overflow-x-auto rounded">
            {loading ? (
              <TopFundskeleton />
            ) : performanceData.length > 0 ? (
              // ✅ Your existing table stays here
              <table className="min-w-full text-[var(--rv-white)]">
                <thead className="bg-[var(--rv-secondary)] text-sm text-[var(--rv-white)] rounded">
                  <tr>
                    <th className="px-4 py-3 text-left">Fund Name</th>
                    <th className="px-4 py-3 text-right">5-Year Return</th>
                    <th className="px-4 py-3 text-right">Corpus <br />(₹ Cr)</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((fund, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[var(--rv-ternary)] cursor-pointer border-b border-[var(--rv-ternary)]"
                      onClick={() => handleSelectFunds(fund)}
                    >
                      <td className="px-4 py-3 font-medium ">
                        <p className="text-sm h-12">
                          {fund.funddes}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {fund.schemeCategory || "Equity"}{" "}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {fund.schemeType ? ` - ${fund.schemeType}` : ""}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right text-green-400 font-semibold">
                        {fund.five_year || "0.00"}%
                      </td>
                      <td className="px-4 py-3 text-right">{fund.Corpus || "0.00"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No fund data available</p>
            )}
          </div>

          {/* View All Funds Button */}
          {performanceData.length > 0 && (
            <div className="mt-6 text-center">
              <Link href="/performance/fund-performance" className="btn-secondary">
                View All Funds
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
