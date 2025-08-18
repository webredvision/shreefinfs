import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaBriefcase,
  FaChartLine,
  FaHandHoldingUsd,
  FaUserTie,
  FaGlobeAsia,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Grow your wealth with personalized Portfolio Management Services tailored for high-net-worth individuals.",
};

const pmsFeatures = [
  {
    icon: <FaBriefcase className="text-3xl text-primary" />,
    title: "Customized Portfolios",
    description:
      "Tailor-made investment strategies aligned with your financial goals, risk profile, and preferences.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Active Management",
    description:
      "Portfolios are actively monitored and adjusted based on market movements and opportunities.",
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-primary" />,
    title: "High Return Potential",
    description:
      "Invest in high-conviction ideas across equities, sectors, and themes for superior long-term returns.",
  },
  {
    icon: <FaUserTie className="text-3xl text-primary" />,
    title: "Expert Fund Managers",
    description:
      "Managed by experienced professionals with a proven track record in wealth creation.",
  },
  {
    icon: <FaGlobeAsia className="text-3xl text-primary" />,
    title: "Transparency & Reporting",
    description:
      "Get regular performance reports, portfolio updates, and market outlooks for full visibility.",
  },
];

const PMS = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Portfolio Management Services (PMS)" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Portfolio Management Services (PMS) offer personalized investment
              solutions tailored for high-net-worth individuals. Whether you're
              aiming for capital appreciation or wealth preservation, PMS helps
              you achieve your financial goals through professional management
              and customized strategies.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify">
              With PMS, your funds are managed by seasoned portfolio managers
              who create diversified and focused portfolios across equity and
              other asset classes. It’s ideal for investors looking for
              long-term growth and strategic asset allocation with higher
              flexibility and transparency.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/pms-1.jpg"
              alt="PMS Investment"
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
          <span className="text-[var(--rv-secondary)]">PMS</span>
        </h2>
        <TypesServices serviceTypes={pmsFeatures} />
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Ready to take your investments to the next level? Our PMS solutions
            are crafted to help you grow and preserve wealth with a strategic,
            expert-led approach.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Get Expert <br /> Portfolio Management Advice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PMS;
