// "use client";

// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";

// const data = [
//   { question: `"I Earn Well, But I’m Not Sure If I’m Investing Right."`, answer:` "We design a personalized investment strategy aligned with your income, goals, and risk appetite—ensuring your money grows the way you want."` },
//   { question: `"My money is just sitting in my savings account."`, answer:` "Inflation erodes savings. We help you shift to smart investments that protect and grow your wealth.` },
//   { question: `"There are too many investment options—I’m overwhelmed."`, answer: `" We simplify investing with clear, unbiased strategies tailored to your goals, cutting through the market noise. "` },
//   { question: `"I want to invest, but I fear losing money."`, answer: `" We balance risk and reward with a mix of secure and high-growth investments, ensuring sustainable wealth creation. " `},
//   { question: `"I have long-term goals, but no clear plan."`, answer: `" From homeownership to retirement, we build a structured roadmap to help you reach financial milestones stress-free.  " `},
//   { question: `"I’ve invested, but I don’t know if I’m on track."`, answer: `" We provide ongoing monitoring and rebalancing to keep your portfolio optimized for changing markets and goals.  " `},
//   { question: `"I don’t have time to manage my investments."`, answer: `" We handle everything—from research to execution—so you can focus on what truly matters.  " `},
// ];

// const CustomArrow = ({ onClick, direction }) => (
//   <Button
//     onClick={onClick}
//     className={`hidden md:block md:absolute ${direction === 'prev' ? 'left-[-28px]' : 'right-[-28px]'} top-1/2 transform -translate-y-1/2 text-[var(--rv-white)] bg-[#0E314D] p-3 rounded-4xl z-10`}
//   >
//     {direction === "prev" ? "\u2B9C" : "\u2B9E"}
//   </Button>
// );

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.5 }
//   })
// };
// export default function Concern() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots:false,
//           }
//         }
//       ],
//     nextArrow: <CustomArrow direction="next" />, 
//     prevArrow: <CustomArrow direction="prev" />, 
//   };

//   return (
//     <div className="py-4 md:py-12 bg-white px-2 md:px-0">
//         <div className="container mx-auto">
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInVariants}
//           custom={0}
//            className="topheading  text-[#0E314D] text-center">YOUR CONCERN</motion.h2>
//           <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInVariants}
//           custom={1}
//            className="subheading  text-[#0E314D] mb-4 text-center">
//           How Alpha72 Wealth Does Things <br />
//           Differently – Solving Real Investor Problems
//           </motion.h2>
//           <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInVariants}
//           custom={2} className="text-sm text-semibold font-semibold mb-4 text-center">
//           💡 At Alpha72 Wealth, we don’t just manage money— Let’s grow your wealth, your way. 
//           </motion.p>
//           <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInVariants}
//           custom={3}
//            className="em_bar mx-auto">
//             <div className="em_bar_bg" />
//           </motion.div>
//         <div
//           className="max-w-xl md:max-w-5xl mx-auto items-center">
//       <Slider {...settings}>
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="p-4"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               className={`h-64 rounded-lg shadow-lg p-8 text-center transition-all border border-[#C59F4A] duration-300 ease-in-out ${hoveredIndex === index ? 'bg-white text-black' : 'bg-[#C59F4A] text-[var(--rv-white)]'}`}
//             >
//                 {hoveredIndex === index ? (
//                 <h1 className="text-xl font-bold mb-4 underline">How We Solve It</h1>
//               ) : (
//                 <h1 className="text-xl font-bold mb-4 underline">Concern</h1>
//               )}
//               {hoveredIndex === index ? (
//                 <p className="text-lg font-semibold">{item.answer}</p>
//               ) : (
//                 <p className="text-lg font-semibold">{item.question}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//         </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const data = [
  { question: `"I Earn Well, But I’m Not Sure If I’m Investing Right."`, answer:`We design a personalized investment strategy aligned with your income, goals, and risk appetite—ensuring your money grows the way you want.` },
  { question: `"My money is just sitting in my savings account."`, answer:`Inflation erodes savings. We help you shift to smart investments that protect and grow your wealth.` },
  { question: `"There are too many investment options—I’m overwhelmed."`, answer: `We simplify investing with clear, unbiased strategies tailored to your goals, cutting through the market noise.`},
  { question: `"I want to invest, but I fear losing money."`, answer: ` We balance risk and reward with a mix of secure and high-growth investments, ensuring sustainable wealth creation.`},
  { question: `"I have long-term goals, but no clear plan."`, answer: ` From home ownership to retirement, we build a structured roadmap to help you reach financial milestones stress-free.`},
  { question: `"I’ve invested, but I don’t know if I’m on track."`, answer: `"We provide ongoing monitoring and rebalancing to keep your portfolio optimized for changing markets and goals.`},
  { question: `"I don’t have time to manage my investments."`, answer: `We handle everything—from research to execution—so you can focus on what truly matters. `},
];

const CustomArrow = ({ onClick, direction }) => (
  <Button
    onClick={onClick}
    className={`hidden md:block md:absolute ${direction === 'prev' ? 'left-[-28px]' : 'right-[-28px]'} top-1/2 transform -translate-y-1/2 text-[var(--rv-white)] bg-[#0E314D] p-3 rounded-4xl z-10`}
  >
    {direction === "prev" ? "\u2B9C" : "\u2B9E"}
  </Button>
);

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};
export default function Concern() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
          }
        }
      ],
    nextArrow: <CustomArrow direction="next" />, 
    prevArrow: <CustomArrow direction="prev" />, 
  };

  return (
    <div className="py-4 md:py-12 bg-white px-2 md:px-0">
        <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
           className="topheading  text-[#0E314D] text-center">YOUR CONCERN</motion.h2>
          <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1}
           className="subheading  text-[#0E314D] mb-4 text-center">
          How Alpha72 Wealth Does Things <br />
          Differently – Solving Real Investor Problems
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2} className="text-lg text-semibold font-semibold mb-4 text-center">
          At Alpha72 Wealth, we don’t just offer financial solutions—we solve real problems
          that investors face every day. Here’s how we do things differently:
          </motion.p>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={3}
           className="em_bar mx-auto">
            <div className="em_bar_bg" />
          </motion.div>
        <div
          className="max-w-xl md:max-w-5xl mx-auto items-center">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`h-64 rounded-lg shadow-lg p-4 text-center transition-all border border-[#C59F4A] duration-300 ease-in-out bg-[#C59F4A] text-[var(--rv-white)] `}
            >
              <h1 className="text-xl font-extrabold mb-4">{item.question}</h1>
              <p className="text-lg ">{item.answer}</p>
                {/* {hoveredIndex === index ? (
                
              ) : (
                <h1 className="text-xl font-bold mb-4 underline">Concern</h1>
              )}
              {hoveredIndex === index ? (
                
              ) : (
                <p className="text-lg font-semibold">{item.question}</p>
              )} */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
        </div>
    </div>
  );
}

