"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSignal, FaChartLine, FaHandsHelping, FaChartPie } from "react-icons/fa";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";
import Image from "next/image";

const Services = ({servicedata}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
        appendDots: (dots) => (
          <ul className="slick-dots custom-dots"> {dots} </ul>
        ),
      };
      

 

  return (
    <div>
      <section className="bg-[#F5F5F5] pt-28 pb-24 ">
        <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center text-center wow fadeInUp">
        <div className=" mx-auto ">
        <p className="text-lg border-l-4 pl-4 font-medium uppercase text-[var(--secondary)]">Our Services</p>
      </div>
  <div className="mb-2 lg:mb-0">
    <div className="lg:mb-4">
      
      <h2 className=" text-[32px] sm:text-[36px] md:text-[42px] font-extrabold uppercase text-gray-900">
        Our Best Services
      </h2>
    </div>
  </div>
  <div className="text-center max-w-2xl mb-5">
    <p className="text-gray-700">
      We provide expert financial guidance to ensure secure investments and sustainable growth. Our tailored strategies maximize business potential, while comprehensive asset management solutions help clients build and protect their wealth.
    </p>
  </div>
</div>

          <Slider {...settings}>
            {servicedata.map((service, index) => (
              <div key={index} className="px-4 ">
                 <div className="bg-white shadow-xl rounded-md p-12 text-center">
                 <span className="group h-24 w-24 text-center border-2 border-[var(--secondary)] text-[var(--secondary)] rounded-full inline-flex items-center justify-center text-[50px] transition-all duration-500 hover:bg-[var(--secondary)] hover:text-[var(--rv-white)]">
  <Image src={`/${service.imageSrc}`} alt={service.name} width={50} height={50} className="transition-all duration-500 group-hover:brightness-999" />
</span>
                  
                  <h4 className="mt-4 text-2xl font-semibold mb-2"><Link href="">{service.name}</Link></h4>
                  <p className="mt-4 text-gray-600 line-clamp-[7] text-justify">{service.description}</p>
                  <Link href={service.link}>
                  <Button className="mt-4 h-[50px] border border-[var(--secondary)] inline-flex items-center gap-2 px-6 rounded-[30px] text-[var(--secondary)] text-[15px] font-medium uppercase transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--rv-white)] cursor-pointer">
  <FaPlus /> Read More
</Button>

                </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Services;