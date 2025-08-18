"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function InvestmentSection() {
  return (
    <div
      className="py-4 md:py-12 bg-[#F5FFFC] relative overflow-x-hidden"
      
    >
      <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInFromLeft} className="max-w-5xl mx-auto">
        <h2 className="subheading text-[#0E314D] mb-4 text-center">
          Your Investments stay in your name, <br /> giving you full control over your wealth
        </h2>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10">
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 items-end bg-[#c59f4a]/60 rounded-full">
                <Image src="/Vector (2).png" alt="Invest" height={150} width={150} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#002A45] mb-4">Invest</h2>
            <p className="text-md text-[#333]">
            Grow your wealth with carefully selected investment opportunities tailored to your goals. We help you build a portfolio that works as hard as you do.
            </p>
          </div>

          <div className="hidden md:block border-l border-gray-300 h-40"></div>

          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 items-end bg-[#c59f4a]/60 rounded-full">
                <Image src="/Vector (3).png" alt="Restructure" height={400} width={400} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#002A45] mb-4">Restructure</h2>
            <p className="text-md text-[#333]">
            Is your portfolio out of sync? We realign it to match your risk appetite, time horizon, and market dynamics.
            </p>
          </div>

          <div className="hidden md:block border-l border-gray-300 h-40"></div>

          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 items-end bg-[#c59f4a]/60 rounded-full">
                <Image src="/cash-withdrawal 1.png" alt="Liquidate" height={400} width={400} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#002A45] mb-4">Liquidate</h2>
            <p className="text-md text-[#333]">
            Need access to funds? We guide you in exiting investments smartly—minimizing tax impact and maximizing returns.
            </p>
          </div>
        </div>
      </motion.div>
      <Image src="/Vector.png" alt="Invest" height={200} width={200} className="absolute right-0 top-50 md:top-0" />
    </div>
  );
}
