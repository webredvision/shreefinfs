import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaHeartbeat,
  FaUserShield,
  FaHospital,
  FaUmbrella,
  FaFileMedicalAlt,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page";

export const metadata = {
  title: "Insurance Services",
  description:
    "Protect yourself and your loved ones with our range of life, health, and general insurance plans tailored to your needs.",
};

const insuranceTypes = [
  {
    icon: <FaHeartbeat className="text-3xl text-primary" />,
    title: "Life Insurance",
    description:
      "Financial protection for your family in case of unforeseen events, ensuring peace of mind and security.",
  },
  {
    icon: <FaUserShield className="text-3xl text-primary" />,
    title: "Health Insurance",
    description:
      "Covers medical expenses, hospitalization, and treatments, so you can focus on recovery, not bills.",
  },
  {
    icon: <FaHospital className="text-3xl text-primary" />,
    title: "Critical Illness Cover",
    description:
      "Lump sum payout for serious illnesses like cancer or heart disease, giving you financial support when you need it most.",
  },
  {
    icon: <FaUmbrella className="text-3xl text-primary" />,
    title: "General Insurance",
    description:
      "Includes coverage for vehicles, travel, property, and more to protect your valuable assets.",
  },
  {
    icon: <FaFileMedicalAlt className="text-3xl text-primary" />,
    title: "Comprehensive Plans",
    description:
      "Tailored solutions combining life, health, and accident benefits in a single policy.",
  },
];

const Insurance = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Insurance" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Insurance is your safety net against life’s uncertainties. Whether
              it's securing your family’s future, protecting your health, or
              covering unexpected accidents, insurance ensures financial
              stability during critical times.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify">
              We offer a wide range of insurance solutions including Life,
              Health, and General Insurance. Our advisors help you choose the
              right plan based on your needs, so you can enjoy life worry-free.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/insurance-1.jpg"
              alt="Insurance Coverage"
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
          Types of <span className="text-[var(--rv-secondary)]">Insurance</span>
        </h2>
        <TypesServices serviceTypes={insuranceTypes} />
      </div>


      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Secure your future with the right insurance policy. Whether you need
            protection for yourself, your family, or your assets, we’re here to
            help you make the right choice.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Protect What Matters <br /> Talk to Our Insurance Expert
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
