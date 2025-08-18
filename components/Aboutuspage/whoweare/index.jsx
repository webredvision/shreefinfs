"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";
const WhoWeare = ({ aboutus, missionVission }) => {
  function createMarkup(item) {
    return { __html: item || "" };
  }
  // console.log(missionVission)
  return (
    <div>
      <div className="max-w-screen-xl mx-auto main_section">
        {/* Transforming Ambitions Section */}
        <section
          className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-6 items-center"
        >
          <div className="relative md:col-span-2">
            <Image
              src="/images/whowe.webp"
              alt="About Us"
              width={400}
              height={550}
              className=" rounded-xl  shadow-lg"
            />
          </div>

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
              Who <span className="text-[var(--rv-primary)]">We Are</span>
            </motion.h2>
            <motion.p
              className="text-[var(--rv-white)]/80  leading-relaxed mb-6"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              We are a team of seasoned financial experts who prioritize <strong>integrity</strong>, <strong>transparency</strong>, and <strong>client-centricity</strong> in everything we do. Our advisory approach is built on trust, long-term relationships, and delivering consistent value.


            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Mission */}
              <div className="group bg-gradient-to-br from-[var(--rv-primary)] to-[var(--rv-bg-primary)] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                {/* Icon */}
                <div className="w-12 h-12 mb-4">
                  <img
                    src="/icons/mission.svg" // ⬅️ replace with your actual path
                    alt="Mission Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[var(--rv-white)] my-3">Our Mission</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: missionVission?.mission }}
                  className="text-[var(--rv-white)]/80 mb-6"
                />
              </div>

              {/* Vision */}
              <div className="group bg-gradient-to-br from-[var(--rv-primary)] to-[var(--rv-bg-primary)] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                {/* Icon */}
                <div className="w-12 h-12 mb-4">
                  <img
                    src="/icons/vision.svg" // ⬅️ replace with your actual path
                    alt="Vision Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[var(--rv-white)] my-3">Our Vision</h3>
                <p className="text-[var(--rv-white)]/80 mb-6">{missionVission?.vision}</p>
              </div>
            </div>

          </motion.div>

        </section>
      </div>
    </div>
  )
}

export default WhoWeare;
