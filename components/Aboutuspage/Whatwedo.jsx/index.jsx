"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
const Whatwedo = () => {
  function createMarkup(item) {
    return { __html: item || "" };
  }
  return (
    <div>
      <div className="bg-[var(--rv-ternary)]">
        <div className="max-w-screen-xl mx-auto main_section">
          {/* Transforming Ambitions Section */}
          <section
            className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-6 items-center"
          >

            <motion.div
              className="md:col-span-3 text-[var(--rv-white)]  rounded-xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className=" md:col-span-1 text-4xl font-bold mb-2"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                What   <span className="text-[var(--rv-secondary)]">We Do</span>
              </motion.h2>

              <motion.p
                className="text-[var(--rv-white)]/80  leading-relaxed mb-6"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                At InvestIQ Capital, we offer <strong>end-to-end financial solutions</strong> customized to your life goals. Whether you're planning for retirement, purchasing a new home, or securing your child's education, our services are tailored to get you there.

              </motion.p>

              <Link href="/contactus">
                <motion.button
                  className="bg-[var(--rv-secondary)]  text-[var(--rv-white)] font-bold py-2 px-6 rounded-lg transition-all"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Join Us
                </motion.button>
              </Link>
            </motion.div>
            <div className="relative md:col-span-2">
              <Image
                src="/images/mutalfundwhat.png"
                alt="About Us"
                width={400}
                height={550}
                className=" rounded-xl  shadow-lg"
              />
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default Whatwedo;
