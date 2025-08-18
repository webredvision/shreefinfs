"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const mainCounterRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(mainCounterRef, { once: true, threshold: 0.3 });

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Observer for triggering counter animation
  useEffect(() => {
    if (isMobile || !isInView) return;

    const counters = mainCounterRef.current?.querySelectorAll(".count");
    counters?.forEach((counter) => {
      if (!counter.classList.contains("counter-started")) {
        startCounter(counter);
        counter.classList.add("counter-started");
      }
    });
  }, [isInView, isMobile]);

  // Counter logic
  const startCounter = (counter) => {
    const target = parseInt(
      counter.querySelector(".counter-number").getAttribute("data-target")
    );
    let current = 0;
    const step =
      parseInt(counter.getAttribute("data-step")) ||
      (target >= 500 ? (target >= 5000 ? 500 : 20) : 1);

    const interval = setInterval(() => {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        counter.querySelector(".counter-value").innerText = current;
      } else {
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <section
      className="text-[var(--rv-white)] main_section max-w-screen-xl mx-auto "
      ref={mainCounterRef}
    >
      <div className="grid grid-cols-2 justify-center items-center gap-4">
        {/* Left: Image + Paragraph (50%) */}
        <motion.div
          className="space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why <span className="text-[var(--rv-primary)]">Choose</span> Us?
          </motion.h2>
          <p className="text-[var(--rv-white)]/80">
            At Shreefin, we are more than just a wealth management firm—we are your partners in building a secure, purpose-driven financial future. Our client-first approach, backed by intelligence and quality, ensures that every financial roadmap we craft reflects your goals, values, and life ambitions.
          </p>
          <div className="relative w-full h-[300px] lg:h-[400px] rounded-md overflow-hidden">
            <Image
              src="/why-us.webp"
              alt="Analytics"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Counters (50%) */}
        <motion.div
          className="space-y-12 pl-0 lg:pl-10"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="count" data-step="1">
            <div
              className="text-4xl font-bold text-[var(--rv-secondary)] counter-number"
              data-target="10"
              style={{
                font: "bold 80px Arial",
                color: "transparent",
                WebkitTextFillColor: "var(--rv-primary) ",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "var(--rv-white)",
                textShadow: "0px 0px 5px var(--rv-white)",
              }}
            >
              <span className="counter-value">0</span>+
            </div>
            <p className="text-xl border-t border-gray-700 pt-2">
              Years of Experience
            </p>
          </div>

          <div className="count" data-step="20">
            <div
              className="text-4xl font-bold text-[var(--rv-secondary)] counter-number"
              data-target="150"
              style={{
                font: "bold 80px Arial",
                color: "transparent",
                WebkitTextFillColor: "var(--rv-primary) ",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "var(--rv-white)",
                textShadow: "0px 0px 5px var(--rv-white)",
              }}
            >
              <span className="counter-value">0</span>+
            </div>
            <p className="text-xl border-t border-gray-700 pt-2">
              Asset Under Management (cr)
            </p>
          </div>

          <div className="count" data-step="500">
            <div
              className="text-4xl font-bold text-[var(--rv-secondary)] counter-number"
              data-target="11000"
              style={{
                font: "bold 80px Arial",
                color: "transparent",
                WebkitTextFillColor: "var(--rv-primary) ",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "var(--rv-white)",
                textShadow: "0px 0px 5px var(--rv-white)",
              }}
            >
              <span className="counter-value">0</span>+
            </div>
            <p className="text-xl border-t border-gray-700 pt-2">
              People Managed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
