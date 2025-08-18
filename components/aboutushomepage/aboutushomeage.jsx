import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiTeamIdea } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
const AboutUsHome = ({sitedata}) => {
  return (
    <div>
      <section className="about__area pt-28 pb-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div
            className="flex flex-wrap items-center wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="w-full lg:w-1/2 ">
              <div className="relative mb-8 ml-2">
                <div>
                  <Image
                    src="/about.jpg"
                    alt="About Us"
                    width={550}
                    height={400}
                    className="rounded-4xl"
                  />
                </div>
                <div className="absolute bottom-[-70] left-[-50] hidden lg:block">
                  <Image src="/abp-img.png" alt="" height={320} width={320} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <div className="mb-6">
                  <div className="border-l-4 border-[var(--secondary)] pl-4">
                    <p className="text-[18px] font-medium text-[var(--secondary)] uppercase  inline-block leading-none mb-2">
                      About Company
                    </p>
                  </div>
                  <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[46px] md:leading-[52px] text-[#042132] uppercase font-extrabold mb-0">
                    Who We Are
                  </h2>
                </div>
                <p className="text-gray-600">
                At {sitedata?.title} , we understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to create. We are here to be your trusted financial companion, guiding you through every step.
                </p>
                <ul className="mt-6 space-y-4 flex flex-col md:flex-row px-4 py-8 gap-4 text-left border-1 rounded-lg border-[var(--secondary)]">
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full shadow-lg shadow-[rgba(0,5,75,0.08)] mr-[25px] text-2xl">
                        <GiTeamIdea className="text-[#042132] text-[28px] leading-[60px] transition-all duration-300 ease-out hover:text-[var(--secondary)]" />
                      </div>
                      <h5 className="text-lg font-semibold">Our Mission</h5>
                    </div>
                    <p className="text-gray-600 mt-2 text-justify line-clamp-4">
                    Our mission is to provide accessible and personalized financial services, empowering individuals across India to achieve financial success. We are dedicated to offering expert guidance, making financial services available to all, and ensuring every Indian can turn their financial aspirations into reality.

                    </p>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full shadow-lg shadow-[rgba(0,5,75,0.08)] mr-[25px] text-2xl">
                        <RiTeamFill className="text-[#042132] text-[28px] leading-[60px] transition-all duration-300 ease-out hover:text-[var(--secondary)]" />
                      </div>
                      <h5 className="text-lg font-semibold">Our Vision</h5>
                    </div>
                    <p className="text-gray-600 mt-2 text-justify line-clamp-4">
                    Our vision is to become the leading force in shaping a financially secure and prosperous India. We aim to set new standards in the financial industry and be the go-to partner for those seeking financial stability, growth, and success, contributing to a brighter future for our clients and the nation as a whole.
                    </p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="bg-[var(--secondary)] text-[var(--rv-white)] py-5 px-5 text-xl uppercase rounded-lg inline-flex items-center hover:bg-[var(--primary)] hover:text-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
