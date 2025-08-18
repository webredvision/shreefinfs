import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaBalanceScale,
  FaUserTie,
  FaMoneyBillWave,
  FaPiggyBank,
  FaReceipt,
  FaChartBar,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page";

const fundTypes = [
  {
    icon: <FaBalanceScale className="text-3xl text-primary" />,
    title: "Diversification",
    description:
      "Spread your investments across various asset classes to reduce risk.",
  },
  {
    icon: <FaUserTie className="text-3xl text-primary" />,
    title: "Professional Management",
    description:
      "Your investment is managed by expert fund managers who make decisions based on market conditions.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    title: "Liquidity",
    description:
      "Mutual funds can be easily bought or sold, providing flexibility to access your money when needed.",
  },
  {
    icon: <FaPiggyBank className="text-3xl text-primary" />,
    title: "Affordable",
    description:
      "You don’t need a large amount to start investing in mutual funds, making them accessible to a wide range of investors.",
  },
  {
    icon: <FaReceipt className="text-3xl text-primary" />,
    title: "Tax Benefits",
    description:
      "Certain mutual funds like ELSS offer tax-saving opportunities under the relevant sections of tax laws.",
  },
  // {
  //   icon: <FaChartBar className="text-3xl text-primary" />,
  //   title: "Transparency",
  //   description:
  //     "Regular updates on fund performance and NAV ensure you stay informed about your investment.",
  // },
];

export const metadata = {
  title: "Mutual Fund Services",
  description:
    "Invest in mutual funds to diversify your portfolio and achieve long-term financial growth with professional management.",
};

const MutualFunds = () => {
  return (
    <div>
      {/* Heading and Subheading */}
      <InnerBanner pageName={"Mutual Funds"} />

      <div className="max-w-screen-xl mx-auto main_section1 ">
        {/* Introduction with Image */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 items-center text-justify">
              Mutual funds are an excellent way to grow your wealth while
              reducing individual investment risk. By pooling resources from
              multiple investors, mutual funds provide you with exposure to a
              variety of asset classes like equities, bonds, and more. With
              professional management, they offer a balanced approach to
              building wealth for both beginners and seasoned investors.
            </p>
            <p className="text-lg text-gray-300 mt-2 text-justify items-center">
              A mutual fund is a pool of funds collected from investors and
              invested in a diverse set of financial instruments like stocks,
              bonds, and other securities. These funds are managed by
              experienced fund managers who allocate investments across various
              asset classes to ensure diversified and risk-adjusted returns.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/mutual-fund-1.jpg"
              alt="Investment Growth"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Types of Mutual Funds */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Features of{" "}
          <span className="text-[var(--rv-secondary)]">Mutual Funds</span>
        </h2>

        <TypesServices serviceTypes={fundTypes} />
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Types of Mutual Funds */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Performing </span>{" "}
          Funds
        </h2>

        <TopTaxSavingFunds  />
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Whether you&apos;re just starting out or are looking to diversify
            your portfolio, mutual funds are a great way to achieve your
            financial goals. With professional management, diversified
            investment options, and low entry costs, mutual funds provide a
            smart path to long-term growth. Begin your investment journey today!
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Investing in <br /> Mutual Funds Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
