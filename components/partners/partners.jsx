"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const SubscribCard = ({ amclogos }) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <motion.div
        className="space-y-6 text-white text-center"
      >
        <motion.h2
          className="text-4xl md:text-4xl font-bold mb-6"
        >
          Our <span className="text-[var(--rv-primary)]">Partners</span>
        </motion.h2>

        <p className="text-[var(--rv-white)]/80">
          Quickly estimate how your monthly SIP investments can grow over time.
          Enter an amount, rate, and duration to see the power of compounding at work.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
        custom={2}
        className="em_bar mx-auto"
      >
        <div className="em_bar_bg" />
      </motion.div>

      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {amclogos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="px-5 main_section">
                <a
                  href={logo.logourl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://redvisionweb.com/${logo.logo}`}
                    alt={logo.logoname}
                    width={160}
                    height={180}
                    className=" transition ease-in-out duration-75 rounded"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SubscribCard;
