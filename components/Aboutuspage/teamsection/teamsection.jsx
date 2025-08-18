"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TeamSection = ({ teams }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[var(--rv-primary)]">
      <div className="max-w-screen-xl mx-auto main_section">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h2
            className="text-[var(--rv-white)] text-4xl font-bold mb-6"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[var(--rv-secondary)]">Teams</span>
          </motion.h2>

          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {teams.map((member, index) => (
                <div
                  key={index}
                  className="px-4 cursor-pointer"
                  onClick={() => openModal(member)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <Image
                      src={member?.image?.url}
                      alt={member?.name}
                      width={400}
                      height={400}
                      className="w-full h-[400px] object-cover object-top"
                    />
                    <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[var(--rv-primary)] via-[var(--rv-primary)]/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-[var(--rv-white)]">
                      <h3 className="text-lg font-semibold">{member?.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Arrow buttons */}
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-10 hover:bg-gray-200"
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={() => sliderRef.current.slickNext()}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-10 hover:bg-gray-200"
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </motion.section>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="relative bg-[var(--rv-ternary)] max-w-4xl w-full max-h-[90vh] rounded-xl overflow-y-auto shadow-xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl z-50 md:text-[var(--rv-white)] text-[var(--rv-secondary)]"
              aria-label="Close Modal"
            >
              <IoClose />
            </button>

            {/* Image Section - Big on Mobile */}
            <div className="w-full md:w-1/2 h-72 md:h-auto relative flex-shrink-0">
              <Image
                src={selectedMember.image?.url}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="p-6 w-full md:w-1/2 text-[var(--rv-white)]">
              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-lg font-semibold mb-4">
                {selectedMember.designation}
              </p>
              <div
                className="text-[var(--rv-white)]/90 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: selectedMember.description || "",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
