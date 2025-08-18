"use client"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./investment.css"
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const tabData = {
  "Investment Solutions": [
    { title: "Mutual Funds", img: "/e99bcb1216d8f72fbded048efa204254.jpg", link: "/products/mutual-funds" },
    { title: "PMS (Portfolio Management Services)", img: "/9c7bc39aeed96a3d20917fa2fd2a40b1.jpg", link: "/products/pms" },
    { title: "AIFs (Alternate Investment Funds)", img: "/Services/aif-2.jpg", link: "/products/Aifs" },
    { title: "Private Equity", img: "/670fb45544016d6d9393635be575d711.jpg", link: "/products/private-equity" },
    { title: "Unlisted Securities", img: "/sequrities.jpeg", link: "/products/unlisted-stocks" },
    { title: "Direct stocks", img: "/Services/direct-stocks.jpg", link: "/products/direct-stocks" },
    { title: "US Stocks Investing", img: "/usstock.webp", link: "/products/us-stocks" },
    { title: "GIFT City Funds for NRIs & Foreign Nationals", img: "/Services/GIFT-City-Funds-1.jpg", link: "/products/gifty" }
  ],
  "Wealth Preservation & Fixed Income": [
    { title: "Corporate FDs ", img: "/copratefds.jpg", link: "/products/coprate-fds" },
    { title: "Bonds/NCDs", img: "/Bond.png", link: "/products/bonds" },
    { title: "Insurance (Life and Health)", img: "/insaurance.avif", link: "/products/insurance" },
  ],
  "Tax & Estate Planning": [
    { title: "Tax Planning", img: "/tax_saving.jpg", link: "/products/tax-planning" },
    { title: "Will Formation ", img: "/9c7bc39aeed96a3d20917fa2fd2a40b1.jpg", link: "/products/will-formation" }
  ],
  "Legacy Planning": [
    { title: "Real Estate", img: "/real state.jpg", link: "/products//real-estate" }
  ]
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

export default function InvestmentTabs() {
  const [activeTab, setActiveTab] = useState("Investment Solutions");
  const activeCards = tabData[activeTab] || [];

  const settings = {
    dots: true,
    infinite: activeCards.length >= 4,
    speed: 500,
    slidesToShow: Math.min(4, activeCards.length),
    slidesToScroll: 1,
    autoplay: activeCards.length >= 4,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(1, activeCards.length),
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="md:py-12 py-4 bg-[#F5FFFC]">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
          className="topheading text-[#0E314D] text-center">
          PRODUCT OFFERINGS
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1}
          className="subheading text-[#0E314D] text-center">
          Tailored solutions for your <br /> financial growth
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2}
          className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={3}
          className="flex flex-wrap justify-center space-x-4 mb-4">
          {Object.keys(tabData).map((tab) => (
            <Button
              key={tab}
              className={`px-4 py-4 rounded-lg mb-4 cursor-pointer section3cardheading ${
                activeTab === tab ? "bg-[#C59f4a] text-[var(--rv-white)]" : "bg-[#1e3b4a] text-[var(--rv-white)]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </motion.div>

        {activeCards.length >= 4 ? (
          <Slider {...settings}>
            {activeCards.map((card, index) => (
              <div key={index} className="p-4">
                <Link href={card.link}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-[400px] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#0E314DD9] p-5 text-center section3cardheading text-[var(--rv-white)] font-semibold">
                      {card.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 justify-items-center">

            {activeCards.map((card, index) => (
              <div key={index} className="p-4 justify-center items-center h-[400px] max-w-[300px]">
                <Link href={card.link}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-[400px] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#0E314DD9] p-5 text-center text-2xl section3cardheading text-[var(--rv-white)] font-semibold">
                      {card.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
