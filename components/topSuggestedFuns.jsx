"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CryptoJS from "crypto-js";

export default function TopSuggestedFund({ performanceData, schemeName }) {
  const [fundList, setFundList] = useState(performanceData);
  const [filteredFunds, setFilteredFunds] = useState([]);
  const router = useRouter();
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  useEffect(() => {
    if (performanceData && Array.isArray(performanceData)) {
      const topData = performanceData
      setFundList(topData);
    }
  }, [performanceData]);

  useEffect(() => {
    let result = [...fundList];
    const getReturnValue = (fund) => {
      return parseFloat(
        fund?.five_year !== "0.00" ? fund.five_year :
          fund?.three_year !== "0.00" ? fund.three_year :
            fund?.one_year !== "0.00" ? fund.one_year :
              fund?.nine_month !== "0.00" ? fund.nine_month :
                fund?.six_month !== "0.00" ? fund.six_month :
                  fund?.three_month !== "0.00" ? fund.three_month :
                    fund?.one_month !== "0.00" ? fund.one_month :
                      fund?.one_week !== "0.00" ? fund.one_week :
                        "0"
      );
    };
    result.sort((a, b) => getReturnValue(b) - getReturnValue(a));
    setFilteredFunds(result);
  }, [fundList]);

  const handleSelectFunds = (fund) => {
    const dataToStore = {
      pcode: fund.pcode,
      ftype: schemeName,
      timestamp: Date.now(),
    };

    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();

    localStorage.setItem("encryptedFundPerormanceData", encrypted);

    router.push("/performance/fund-performance/fund-details");
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Fund List */}
      <div className="bg-[var(--rv-third)] text-[var(--rv-white)] shadow rounded  overflow-hidden">
        {filteredFunds.length > 0 ? (
          filteredFunds.map((fund, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center border-b border-[var(--rv-primary)] gap-4 p-4 hover:bg-[var(--rv-secondary)] cursor-pointer"
            >

              <div className="flex items-center gap-3 w-full md:w-1/2" onClick={() => handleSelectFunds(fund)}>
                {/* <Image
                  src={fund.logo || "/default-logo.png"}
                  alt="Logo"
                  width={36}
                  height={36}
                  className="rounded"
                /> */}
                <div>
                  <p className="font-semibold">{fund.funddes}</p>
                  <p className="text-sm text-gray-400">
                    {fund.schemeCategory}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center text-center w-full md:w-1/2">
                <div className="md:text-right" onClick={() => handleSelectFunds(fund)}>
                  <p className="text-sm text-gray-400">Corpus</p>
                  <p className="font-medium text-gray-200">
                    ₹{fund?.Corpus} Cr
                  </p>
                </div>
                <div className="md:text-right" onClick={() => handleSelectFunds(fund)}>
                  {fund?.fiveyear_navEndDate &&
                    fund.fiveyear_navEndDate !== "0.00" && (
                      <div>
                        <p className="text-sm text-gray-400">NAV</p>
                        <p className="font-medium text-gray-200">
                          ₹{fund?.fiveyear_navEndDate}
                        </p>
                      </div>
                    ) || (fund?.threeyear_navEndDate &&
                      fund.threeyear_navEndDate !== "0.00" && (
                        <div>
                          <p className="text-sm text-gray-400">NAV</p>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.threeyear_navEndDate}
                          </p>
                        </div>
                      ))
                    || (fund?.oneyear_navEndDate
                      &&
                      fund.oneyear_navEndDate !== "0.00" && (
                        <div>
                          <p className="text-sm text-gray-400">NAV</p>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.oneyear_navEndDate}
                          </p>
                        </div>
                      )) || (/* Add six_month check here if available */
                      fund?.sixmonth_navEndDate &&
                      fund.sixmonth_navEndDate !== "0.00" && (
                        <div>
                          <h3 className="text-sm text-gray-400">NAV</h3>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.sixmonth_navEndDate}
                          </p>
                        </div>
                      ))
                    || (/* Add six_month check here if available */
                      fund?.three_month &&
                      fund.three_month !== "0.00" && (
                        <div>
                          <h3 className="text-sm text-gray-400">NAV: 6 Month Data</h3>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.three_month}
                          </p>
                        </div>
                      ))
                    || (/* Add six_month check here if available */
                      fund?.onemonth_navEndDate &&
                      fund.onemonth_navEndDate !== "0.00" && (
                        <div>
                          <h3 className="text-sm text-gray-400">NAV: 6 Month Data</h3>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.onemonth_navEndDate}
                          </p>
                        </div>
                      ))
                    || (/* Add six_month check here if available */
                      fund?.oneweek_navEndDate &&
                      fund.oneweek_navEndDate !== "0.00" && (
                        <div>
                          <h3 className="text-sm text-gray-400">NAV: 6 Month Data</h3>
                          <p className="text-lg font-medium text-gray-200">
                            ₹ {fund?.oneweek_navEndDate}
                          </p>
                        </div>
                      ))}

                </div>
                <div className="md:text-right" onClick={() => handleSelectFunds(fund)}>
                  {(() => {
                    const {
                      five_year,
                      three_year,
                      one_year,
                      nine_month,
                      six_month,
                      three_month,
                      one_month,
                      one_week,
                    } = fund || {};

                    let value = "0.00";
                    let label = "";

                    if (five_year !== "0.00") {
                      value = five_year;
                      label = "5Y";
                    } else if (three_year !== "0.00") {
                      value = three_year;
                      label = "3Y";
                    } else if (one_year !== "0.00") {
                      value = one_year;
                      label = "1Y";
                    } else if (nine_month !== "0.00") {
                      value = nine_month;
                      label = "9M";
                    } else if (six_month !== "0.00") {
                      value = six_month;
                      label = "6M";
                    } else if (three_month !== "0.00") {
                      value = three_month;
                      label = "3M";
                    } else if (one_month !== "0.00") {
                      value = one_month;
                      label = "1M";
                    } else if (one_week !== "0.00") {
                      value = one_week;
                      label = "1W";
                    } else {
                      value = "0";
                      label = "1D";
                    }

                    return (
                      <>
                        <p className="text-sm text-gray-400">
                          {label} CAGR returns
                        </p>
                        <p className="font-medium text-green-600">{value}%</p>
                      </>
                    );
                  })()}
                </div>
                <div className="md:text-right">
                  <Link href="/contact-us" className="bg-[var(--rv-secondary)] text-[var(--rv-white)] font-bold px-6 py-2 rounded-lg transition-all">
                    Invest
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No funds match your search.
          </div>
        )}
      </div>
    </div>
  );
}
