'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/portfolio-analysis.png",
    title: "Portfolio Analysis",
    description:
      "Gain deep insights into your investment portfolio with detailed analytics, performance tracking, and risk assessment to optimize your returns.",
  },
  {
    icon: "/icons/invest-online.png",
    title: "Invest Online",
    description: "Seamlessly invest in a wide range of mutual funds, stocks, and other financial products online with just a few clicks.",
  },
  {
    icon: "/icons/goal-tracker.png",
    title: "Goal Tracker",
    description: "Set and monitor your financial goals, such as retirement or education savings, and stay on track with personalized recommendations.",
  },
  {
    icon: "/icons/online-kyc.png",
    title: "Online KYC",
    description: "Seamless Online KYC , Verify your identity digitally and begin your investment journey in minutes.",
  },
];

// Container variants for staggering feature items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.2,
    },
  },
};

// Variants for individual feature animation
const featureVariants = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <div className="">
      <section className="max-w-screen-xl mx-auto main_section text-[var(--rv-white)] ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Top <span className="text-[var(--rv-primary)]">Features</span> We Provide
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-gray-300  mt-4 mb-8"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover the powerful tools and features we offer to help you manage your investments, track your financial goals, and make informed decisions with ease.
            </motion.p>

            {/* Feature List with staggered animation */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  variants={featureVariants}
                >
                  <div className="bg-gradient-to-br from-[var(--rv-primary)] to-[var(--rv-bg-primary)] rounded p-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{feature.title}</h4>
                    <p className="text-gray-400 text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side image block */}
          <motion.div
            className="flex justify-center "
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/mobileicon.png"
              alt="Mobile Report"
              width={400}
              height={300}
              className="rounded-xl "
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
