// components/GetStartedBanner.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection({ sitedata }) {
  return (
    <section className="realative top-0 w-full h-[770px]  bg-[url('/hero-section.webp')] bg-cover bg-bottom text-[var(--rv-white)] ">
      <div className="max-w-screen-xl mx-auto px-2 md:px-0 pt-42 md:pt-42 space-y-6">
        <motion.h1 className="text-4xl md:text-[60px] font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Invest in <br /> Professionally <br /> Managed Funds
        </motion.h1>
        <motion.p className="text-gray-300 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {sitedata?.description}
        </motion.p>
        <motion.p className="text-gray-300 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Our journey began with a simple promise: to empower every individual in India to achieve their financial goals and protect what matters most. We know that life's uncertainties can be overwhelming, but with the right guidance and support, you can navigate them successfully.
        </motion.p>
        {/* New Buttons */}
        <Link href="/contactus">
          <motion.button
            className="btn-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Strated
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
