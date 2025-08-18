"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function FAQ({ Faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="">
      <div className=" max-w-screen-xl main_section mx-auto  text-center items-center overflow-hidden">
        <motion.h2
          className="text-4xl text-[var(--rv-white)] font-bold mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Frequently Asked{" "}
          <span className="text-[var(--rv-primary)]">Questions</span>
        </motion.h2>

        <div className="max-w-screen-xl mt-10 mx-auto text-left flex flex-col lg:flex-row items-center gap-6">
          {/* Left Image Section */}

          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px]"
            variants={fadeFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/faq.webp"
              alt="FAQ"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Right FAQ Section */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-2 border border-white rounded-2xl overflow-hidden"
                variants={childFade}
              >
                <Button
                  className="items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow w-full flex justify-between text-left whitespace-normal p-5"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-[16px] md:text-lg font-bold text-[var(--rv-white)] text-left break-words hover:text-[var(--rv-primary)]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <MinusIcon className="w-5 h-5 text-[var(--rv-white)] " />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-[var(--rv-white)]" />
                  )}
                </Button>
                {openIndex === index && (
                  <div className="p-4 bg-[var(--rv-bg-primary)] text-[var(--rv-white)] border-t" dangerouslySetInnerHTML={{ __html: faq.answer }}>

                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
