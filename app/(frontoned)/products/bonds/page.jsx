import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaHandHoldingUsd,
  FaShieldAlt,
  FaChartLine,
  FaLandmark,
  FaClock,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Bond Investment Services",
  description:
    "Secure and predictable returns with Government, Corporate, and Tax-Free bonds tailored for your investment needs.",
};

const bondFeatures = [
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Capital Protection",
    description:
      "Bonds offer safety of principal, especially government and high-rated corporate bonds.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Steady Income",
    description:
      "Earn regular interest payouts, ideal for conservative investors and retirees.",
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-primary" />,
    title: "Diverse Options",
    description:
      "Choose from Government Bonds, Tax-Free Bonds, PSU Bonds, and more based on your investment goals.",
  },
  {
    icon: <FaLandmark className="text-3xl text-primary" />,
    title: "Tax Efficiency",
    description:
      "Invest in Tax-Free or Capital Gain Bonds (54EC) to enjoy tax-saving benefits.",
  },
  {
    icon: <FaClock className="text-3xl text-primary" />,
    title: "Fixed Tenure & Predictability",
    description:
      "Plan your cash flows better with fixed maturity timelines and defined interest rates.",
  },
];

const Bonds = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Bond Investment Services" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Bonds are fixed-income investment instruments that offer stability
              and predictable returns. Whether you're looking for a steady
              income or capital preservation, bonds can be an excellent addition
              to a diversified investment portfolio.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify">
              From government securities to tax-free bonds and corporate bonds,
              there are many options tailored to suit different financial needs.
              With low risk and consistent returns, bonds are particularly
              attractive for conservative investors and those planning for
              retirement.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/Bonds-NCDs-1.jpg"
              alt="Bond Investment"
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
          Why Invest in{" "}
          <span className="text-[var(--rv-secondary)]">Bonds?</span>
        </h2>
        <TypesServices serviceTypes={bondFeatures} />
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Want predictable returns with lower risk? Bonds could be the perfect
            fit for your portfolio. Connect with us to explore the best bond
            options available today.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Invest in Bonds <br /> Secure Your Capital Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bonds;
