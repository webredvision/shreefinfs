"use client"
import { motion } from "framer-motion";

export const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay } }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <section className="p-4 md:p-5 md:px-20 flex flex-col md:flex-row items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-[50%] flex flex-col"
          >
            <motion.h2 variants={textVariants} custom={0.1} className="topheading text-[#0E314D]">
              ABOUT US
            </motion.h2>
            <motion.h3 variants={textVariants} custom={0.3} className="subheading text-[#0E314D]">
              Who We Are
            </motion.h3>
            <motion.div variants={textVariants} custom={0.5} className="em_bar">
              <div className="em_bar_bg" />
            </motion.div>
            <motion.div variants={textVariants} custom={0.7} className="max-w-4xl text-black leading-relaxed text-justify">
              <motion.p variants={textVariants} custom={0.9} className="font-[--font-body] font-[20px]">
              We, the experts at Alpha72 Wealth, believe that money alone doesn’t create happiness—it’s the <em>Alpha </em> that completes the equation. 
              </motion.p>
              <motion.p variants={textVariants} custom={1.1} className="font-[--font-body] font-[20px] mt-2">
              For some, <em>Alpha</em> is the peace of mind that comes from safe investments and financial security. For others, it’s the thrill of taking risks and watching their wealth multiply. It could be the consistency of saving and growing funds for a dream home, a child’s education, a grand wedding, or even a timeless piece of jewellery.
              </motion.p>
              <motion.p variants={textVariants} custom={1.3} className="font-[--font-body] font-[20px] mt-2">
              We understand that financial goals are deeply personal. That’s why we don’t just offer investment solutions—we curate personalized wealth strategies that align with what truly matters to you. Whether you seek stability, growth, or a balance of both, we take the responsibility of generating that <em>Alpha</em> for you, ensuring your life’s equation is complete. 
              </motion.p>
              <motion.p variants={textVariants} custom={1.5} className="font-[--font-body] font-[20px] mt-2">
              At Alpha72, we help you find your Alpha. Let’s build wealth that serves your dreams, your aspirations, and—most importantly—YOU. 
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={imageVariants}
            className="w-full pt-10 md:pt-0 md:w-[50%] md:px-5 md:ml-5 rounded-lg flex flex-col"
          >
            <div className="rounded-lg">
              <img src="/Group 8.png" alt="Team" className="w-full rounded-lg" />
            </div>
            <div className="mt-5  flex rounded-lg">
              <div className="w-[60%]">
                <img src="/new-generation-businessmen-who-are-working (2).png" alt="Team" className="w-full h-[220px] rounded-lg" />
              </div>
              <div className="w-[40%]">
                <img src="/Group 235.png" alt="Team" className="w-full h-[220px] object-contain" />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
