import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaChartLine,
  FaUserShield,
  FaHandshake,
  FaCubes,
  FaBalanceScaleRight,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page"; // Reuse or replace with AIF-specific component

const aifFeatures = [
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "High Return Potential",
    description:
      "AIFs invest in niche and high-growth sectors aiming for superior returns compared to traditional assets.",
  },
  {
    icon: <FaUserShield className="text-3xl text-primary" />,
    title: "Regulated Investment",
    description:
      "AIFs are regulated by SEBI and follow a well-defined structure to protect investor interests.",
  },
  {
    icon: <FaHandshake className="text-3xl text-primary" />,
    title: "Exclusive Investment Opportunities",
    description:
      "Access unique assets like private equity, real estate, hedge funds, and more, not available in public markets.",
  },
  {
    icon: <FaCubes className="text-3xl text-primary" />,
    title: "Diversification Beyond Traditional",
    description:
      "AIFs allow diversification beyond equity and debt by exploring alternate asset classes.",
  },
  {
    icon: <FaBalanceScaleRight className="text-3xl text-primary" />,
    title: "Strategic Risk Management",
    description:
      "Fund managers use strategies like hedging, structured deals, and asset rotation for optimized risk-reward.",
  },
];

export const metadata = {
  title: "Alternative Investment Funds (AIF)",
  description:
    "Explore high-growth investment opportunities through Alternative Investment Funds. Ideal for HNIs seeking diversification beyond traditional assets.",
};

const AIF = () => {
  return (
    <div>
      {/* Heading and Subheading */}
      <InnerBanner pageName={"AIF"} />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction with Image */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Alternative Investment Funds (AIFs) are pooled investment vehicles
              that invest in private equity, venture capital, hedge funds,
              infrastructure, and other unconventional avenues. Tailored for
              high-net-worth individuals (HNIs), AIFs are designed to provide
              strategic diversification and high return potential.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify">
              Managed by experienced professionals, AIFs operate under strict
              regulatory frameworks and offer exposure to exclusive investment
              strategies not typically available in mutual funds or direct
              equity. They are ideal for investors seeking non-traditional,
              high-reward opportunities with controlled risk.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/aif-1.jpg"
              alt="AIF Investment"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Features of AIFs */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Features of <span className="text-[var(--rv-secondary)]">AIF</span>
        </h2>

        <TypesServices serviceTypes={aifFeatures} />
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Top Performing AIFs */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Performing</span> AIFs
        </h2>

        <TopTaxSavingFunds /> {/* Replace with AIF version if needed */}
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Discover high-return, non-traditional investment opportunities with
            AIFs. Take the next step toward financial diversification and wealth
            creation with our expert advisory team.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Investing in <br /> AIFs Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIF;
