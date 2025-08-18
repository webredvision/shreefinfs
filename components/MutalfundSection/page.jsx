"use client"
import { useRef } from 'react';
import BseChartSection from '../bsechartSection/bsechartSection';
import TopPerformingFunds from './typesofmfTop5/page';
import { motion, useInView } from "framer-motion";

const MutalFundSection = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto  main_section">
        <motion.div
          className="space-y-6 text-white text-center mb-10"
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-6"
          >
            Discover <span className="text-[var(--rv-primary)]">Top Funds</span>
          </motion.h2>

          <p className="text-[var(--rv-white)]/80">
            Explore the best-performing mutual funds across categories.
            Compare returns, track performance trends, and make informed
            investment decisions with ease.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <BseChartSection />
          <TopPerformingFunds />
        </div>
      </div>
    </div>
  )
}

export default MutalFundSection
