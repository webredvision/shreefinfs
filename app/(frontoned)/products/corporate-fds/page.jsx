import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaBuilding,
  FaMoneyBillWave,
  FaShieldAlt,
  FaChartLine,
  FaRegClock,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Corporate Fixed Deposits (FDs)",
  description:
    "Invest in high-yield Corporate FDs offering better interest rates than traditional bank FDs with flexible tenures and safety.",
};

const corporateFDFeatures = [
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Higher Returns",
    description:
      "Corporate FDs generally offer higher interest rates compared to regular bank fixed deposits.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Credit-Rated Companies",
    description:
      "Invest in FDs issued by well-rated and reputed corporates, minimizing credit risk.",
  },
  {
    icon: <FaRegClock className="text-3xl text-primary" />,
    title: "Flexible Tenures",
    description:
      "Choose from a wide range of investment tenures to suit your financial planning needs.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    title: "Regular Income Options",
    description:
      "Receive interest monthly, quarterly, or at maturity depending on your preference.",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    title: "Diversified Choices",
    description:
      "Select from various companies, industries, and interest payout structures.",
  },
];

const CorporateFD = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Corporate Fixed Deposits" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Corporate Fixed Deposits (FDs) are term deposits offered by
              companies and financial institutions. They provide higher returns
              compared to traditional bank FDs while maintaining relative safety
              through credit-rated issuers.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify">
              With flexible investment tenures and payout frequencies, corporate
              FDs are ideal for conservative investors looking for predictable
              income and better yields. We help you invest in top-rated
              corporate FDs from trusted issuers.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/corporate-fds-1.jpg"
              alt="Corporate Fixed Deposits"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Features of{" "}
          <span className="text-[var(--rv-secondary)]">Corporate FDs</span>
        </h2>
        <TypesServices serviceTypes={corporateFDFeatures} />
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Looking to grow your wealth with consistent and higher fixed returns?
            Invest in carefully selected Corporate FDs with our expert
            assistance.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Explore Corporate FDs <br /> Get Expert Guidance Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporateFD;
