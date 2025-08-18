import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaCreditCard, FaExternalLinkAlt, FaFileDownload, FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";

const ToolsHome = () => {
  return (
    <div className="lg:pb-60 lg:bg-[#F6F6F6]">
      <section
  className="relative  bg-[var(--primary)] h-[840px] lg:h-[500px]"
>
  <div className="container mx-auto px-4 lg:px-10  pt-10 pb-10  md:pt-[110px]   relative">
    <div className="flex flex-wrap items-center animate-fadeInUp pl-3">
      <div className="w-full lg:w-3/4 md:w-2/3">
        <div className="mb-6 ">
                  <div className="border-l-4 border-[var(--secondary)] pl-4">
                    <p className="text-[18px] font-medium text-[var(--secondary)] uppercase  inline-block leading-none mb-2">
                      Financial tools
                    </p>
                  </div>
                  <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[46px] md:leading-[52px] text-[var(--rv-white)] uppercase font-extrabold mb-0">
                    investors Corners
                  </h2>
                </div>
      </div>
      <div className="w-full lg:w-1/4 md:w-1/3 pl-4 md:pl-0 md:text-right">
        <div className="md:mb-8">
          <Link href="/contactus">
          <Button className="text-[var(--rv-white)] px-5 py-5 border-2 border-white text-xl cursor-pointer">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>

    <div className="mt-8 bg-white lg:absolute lg:bottom-[-400] lg:z-40 ml-3 ">
      <div className="flex flex-wrap animate-fadeInUp ">
        <div className="w-full lg:w-1/2 ">
          <div className="lg:mb-8">

            <ul className=" grid grid-cols-1 md:grid-cols-2 md:gap-5 md:space-y-4">
              {[
                      { href: "#", icon: <FaFileDownload size={50} />, title: "Download Forms" },
                      { href: "/tools/calculators", icon: <FaCalculator size={50} />, title: "Financial Calculator" },
                      { href: "/tools/financialhealth", icon: <FaHeartbeat size={50} />, title: "Financial Health" },
                      { href: "/tools/riskprofile", icon: <FaShieldAlt size={50} />, title: "Risk Profile" },
                      { href: "/tools/paypremiumonline", icon: <FaCreditCard size={50} />, title: "Pay Premium Online" },
                      { href: "/tools/usefullinks", icon: <FaExternalLinkAlt size={50} />, title: "Useful links" },
                    ].map((item, index) => (
                <li key={index} className="flex items-center   text-black p-4 rounded-lg hover:scale-105 transition">
                  <a href={item.href} className="flex items-center space-x-4 ">
                    <div className="w-16 h-16 text-[var(--secondary)]">
                    {item.icon}
                    </div>
                    <h5 className="text-2xl font-semibold">{item.title}</h5>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 hidden lg:block text-right">
          <div className="relative inline-block">
            <div className=" images-b">
            <Image src="/tools-right.png" alt="Investor Tools" width={500}  height={500}/>
            </div>
           <div className="absolute top-0 right-0 ">
           <Image src="/dot.png" alt="Dots" width={300} height={300} />
           
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ToolsHome;
