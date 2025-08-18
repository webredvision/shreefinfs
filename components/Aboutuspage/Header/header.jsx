"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";
const HeaderAboutus = ({ aboutus }) => {
  function createMarkup(item) {
    return { __html: item || "" };
  }
  return (
    <div>
      <div className="max-w-screen-xl mx-auto main_section">
        <section
          className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-6 items-center"
        >
          <motion.div
            className="md:col-span-3 text-[var(--rv-white)] rounded-xl"
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
              <span className="text-[var(--rv-primary)]">About</span> Us
            </motion.h2>

            <div
              dangerouslySetInnerHTML={createMarkup(aboutus[0]?.description)}
              className="text-[var(--rv-white)]/80 text-lg   mb-6"
            />

          </motion.div>
          <div className="relative md:col-span-2">
            <Image
              src={aboutus[0]?.image?.url}
              alt="About Us"
              width={400}
              height={550}
              className=" rounded-xl  shadow-lg"
            />
          </div>
        </section>
      </div>
      <div className="max-w-screen-xl mx-auto padding-bottom-section ">
        {/* Transforming Ambitions Section */}
        <section
          className="text-center items-center"
        >
        </section>
      </div>
    </div>
  )
}

export default HeaderAboutus;
