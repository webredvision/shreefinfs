"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CryptoJS from "crypto-js";


export default function AdvisorCategory() {
  const [categories, setCategories] = useState([]);
  const [categoriesFunds, setCategoriesFunds] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;


  const arnId = "2612";
  const schemeCategory = "selectByAdvisor";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DATA_API}/api/advisor-scheme-category?apikey=351b03c24a79d2f40796037e0d8c2c49`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ arnId }),
          }
        );

        const result = await response.json();
        if (result.status && result.data.length > 0) {
          setCategories(result.data);
          setSelectedCatId(result.data[0].catId);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (catId) => {
    const myId = catId ? catId : selectedCatId;
    setSelectedCatId(myId);
    setLoading(true);
    setCategoriesFunds([]);

    try {
      const response = await axios.post(
        "https://redvisionweb.com/api/advisor-scheme-category-funds?apikey=351b03c24a79d2f40796037e0d8c2c49",
        { arnId, category: myId, schemeCategory }
      );
      // console.log(response);  
      setImageUrl(response.data.imageUrl);
      setCategoriesFunds(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleCategoryClick();
  }, [selectedCatId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filled = Math.round(rating) || 0;
    const empty = totalStars - filled;
    return (
      <div className="flex items-center">
        {Array(filled)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        {Array(empty)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    );
  };


  const handleSelectFunds = (fund) => {
    // console.log(fund)
    const dataToStore = {
      pcode: fund.pcode,
      timestamp: Date.now(),
    };
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();
    localStorage.setItem("encryptedFundData", encrypted);
    // const url = `/performance/single-fund/${slug}?pcode=${items.pcode}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    window.location.href = "/performance/single-fund";
  };


  return (
    <section className="text-[var(--rv-white)] overflow-hidden ">
      <div className="max-w-screen-xl main_section mx-auto flex flex-col lg:flex-row gap-4 items-start">
        {/* Left - Categories & Funds */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[var(--rv-bg-secondary)] to-[var(--rv-secondary)] rounded-2xl  p-4 lg:p-10">
          <h2 className="text-[var(--rv-white)] text-center text-3xl font-bold mb-2">
            Popular Funds
          </h2>
          <p className="text-blue-100 text-lg text-center mb-4">
            Explore trusted funds with proven returns
          </p>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap items-center justify-center">
            {categories.map((cat) => (
              <button
                key={cat.catId}
                onClick={() => handleCategoryClick(cat.catId)}
                className={`px-4 py-2 rounded-md font-medium ${selectedCatId === cat.catId
                  ? "bg-[var(--rv-primary)] text-[var(--rv-white)]"
                  : "bg-[var(--rv-secondary)] text-[var(--rv-white)] hover:bg-[var(--rv-secondary)]"
                  }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {/* Funds List */}
          <div className="space-y-4">
            {loading ? (
              <p>Loading funds...</p>
            ) : categoriesFunds.length > 0 ? (
              categoriesFunds.slice(0, 3).map((fund, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black p-4 rounded-lg flex items-center justify-between shadow cursor-pointer "
                  onClick={() => handleSelectFunds(fund)}
                >
                  <div className="flex flex-col md:flex-row  items-center gap-4">
                    <div className="min-w-[30px] min-h-[30px] md:min-w-[50px] md:min-h-[50px]">
                      <Image
                        src={
                          fund.amcLogo
                            ? `${imageUrl}${fund.amcLogo}`.replace(
                              "http://",
                              "https://"
                            )
                            : "/default-logo.png"
                        }
                        alt="Fund Logo"
                        width={50}
                        height={50}
                        className="rounded-full border"
                      />
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-[10px] md:text-[16px] max-w-auto">
                          {fund.schemeName}
                        </h4>
                        <h6 className="text-gray-500 text-[10px] md:text-[16px]">
                          {fund.subcatogary || "Equity"}{" "}
                          {fund.schemeType ? ` - ${fund.schemeType}` : ""}
                        </h6>
                      </div>
                      <div className="md:hidden">
                        <p className="text-green-600 font-bold">
                          {fund.oneYearPer || "0.00"}%
                        </p>
                        <div className="text-sm">
                          {renderStars(fund.starRating)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-green-600 font-bold">
                      {fund.oneYearPer || "0.00"}%
                    </p>
                    <div className="text-sm">
                      {renderStars(fund.starRating)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No fund data available</p>
            )}
          </div>
        </div>

        {/* Right - Explore Mutual Funds */}
        <motion.div
          className="w-full lg:w-1/2 text-[var(--rv-white)] p-6 lg:py-16 rounded-xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-2"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore <span className="text-[var(--rv-primary)]">Mutual Funds</span>
          </motion.h2>

          <motion.p
            className="text-[var(--rv-white)]/80 leading-relaxed mb-6"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mutual funds are one of the most trusted ways to grow your wealth over time. By pooling money from multiple investors, these funds strategically invest in a mix of
            stocks, bonds, and other securities — spreading risk while aiming for consistent returns. Whether you’re saving for retirement, your child’s education, or simply looking to build a long-term portfolio, mutual funds offer flexibility, professional management, and the potential for steady growth.
          </motion.p>
          <motion.p
            className="text-[var(--rv-white)]/80 leading-relaxed mb-6"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our experts carefully analyze performance, track market trends, and select funds that align with your financial goals and risk appetite, so you can invest with confidence and focus on what truly matters — your future.
          </motion.p>
          <Link href="/performance/fund-performance">
            <motion.button
              className="btn-secondary"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore More
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
