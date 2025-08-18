import React from 'react'
import styles from "./ServicePage.module.css";
import { FaExchangeAlt, FaLaptopCode, FaChalkboardTeacher, FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker, HiRefresh } from "react-icons/hi";

import { MdQueryStats } from "react-icons/md";
import { FaHandshake, FaUsers } from 'react-icons/fa6';
import TypesServices from './typesServices';
;

const BusinessModel  = () => {
    const fundTypes = [
     {
    icon: <FaExchangeAlt className="text-3xl text-primary" />,
    title: "Hybrid Operations",
    description: "Available both digitally and in-person",
  },
  {
    icon: <HiOutlineLocationMarker className="text-3xl text-primary" />,
    title: "Goal-Based Planning",
    description: "Structured around your financial milestones",
  },
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: "Expert Portfolio Supervision",
    description: "Professional oversight of all investments",
  },
  {
    icon: <MdQueryStats className="text-3xl text-primary" />,
    title: "Ongoing Monitoring",
    description: "Regular rebalancing based on market conditions",
  },
  {
    icon: <FaRegEnvelope className="text-3xl text-primary" />,
    title: "Timely Communication",
    description: "Performance updates and strategic insights",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-primary" />,
    title: "Tech-Enabled Access",
    description: "Streamlined onboarding, tracking, and reporting",
  },
  {
    icon: <FaHandshake className="text-3xl text-primary" />,
    title: "Client-Centric Service",
    description: "Transparent, personalized, and ethical",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-primary" />,
    title: "Financial Education",
    description: "Empowering you with knowledge and insights",
  },
  {
    icon: <HiRefresh className="text-3xl text-primary" />,
    title: "Agile Strategy",
    description: "Constantly evolving with market and personal changes",
  },
];
  return (
    <div>
       <div className="bg-[var(--rv-ternary)]">
      <div className="max-w-screen-xl mx-auto  main_section">
         <h2 className="text-4xl font-bold mb-6 text-[var(--rv-white)] items-center text-center" initial={{ x: -100, opacity: 0 }}
          // animate={isInView ? { x: 0, opacity: 1 } : {}}
          // transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our <span className="text-[var(--rv-secondary)]">Business Model</span>
          </h2>

          <p
              className="text-[var(--rv-white)]/80 text-center  leading-relaxed mb-6"
            //   initial={{ x: 20, opacity: 0 }}
            //   whileInView={{ x: 0, opacity: 1 }}
            //   transition={{ delay: 0.5, duration: 0.5 }}
            //   viewport={{ once: true }}
            >
         At InvestIQ Capital, we blend traditional wisdom with modern technology to provide smart, seamless, and adaptable financial solutions.

            </p>

            <TypesServices serviceTypes={fundTypes} />
      </div>
    </div>
    </div>
  )
}

export default BusinessModel;