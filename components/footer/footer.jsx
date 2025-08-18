"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapLocation, FaPinterest, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { servicedata } from "@/data/services";



// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export function Footer({ sitedata, socialMedia, arnData, services }) {
  console.log(arnData[0].arn)
  const amfisabilinks = [
    { title: "Privacy Policy", link: "/footer-page/privacy-policy" },
    { title: "Commission Disclosures", link: "/commission-disclosures" },
    { title: "Risk Factors", link: "/footer-page/risk-factors" },
    { title: "Terms & Conditions", link: "/footer-page/terms-conditions" },
    { title: "SID/SAI/KIM", link: "https://www.sebi.gov.in/filings/mutual-funds.html", target: "_blank" },
    { title: "Code of Conduct", link: "/AMFI_Code-of-Conduct1.pdf", target: "_blank" },
    { title: "Investor Grievance Redressal", link: "/footer-page/investor-grievance-redressal" },
    { title: "Important links", link: "/footer-page/important-links" },
    { title: "SEBI Circulars", link: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListingAll=yes&search=Mutual+Funds", target: "_blank" },
  ];
  const socialIconMap = {
    Facebook: <FaFacebook className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
    Instagram: <FaInstagram className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
    Linkedin: <FaLinkedin className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
    Youtube: <FaYoutube className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
    Twitter: <FaTwitter className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
    Whatsapp: <FaWhatsapp className="text-gray-400 text-2xl hover:text-[var(--rv-white)]" />,
  };
  const tools = [
    { href: "/tools/calculators", text: "Calculators" },
    // { href: "/tools/downloadforms", text: "Download Form" },
    { href: "/tools/financial-health", text: "Financial health" },
    { href: "/tools/pay-premium-online", text: "Pay Premium online" },
    { href: "/tools/risk-profile", text: "Risk Profile" },
    { href: "/tools/useful-links", text: "Useful Links" },

  ];
  return (
    <div className={`" bg-[var(--rv-bg-primary)] overflow-hidden `}>

      <footer >
        <section className="max-w-screen-xl mx-auto main_section1 ">
          <div className="">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* About Us */}
              <div>
                <div className="">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={150}
                      height={100}
                    />
                  </Link>
                </div>
                <p className="mt-5 text-[var(--rv-white)] text-md hover:text-[var(--rv-white)] font-urbanist ">
                  {sitedata?.description}
                </p>


              </div>

              {/* Services */}
              <div>
                <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4">
                  Services
                </h4>
                <ul className="space-y-2 text-md text-[var(--rv-white)] ">
                  {services.map((item, index) => (
                    <li key={index}>
                      <Link href={`${item?.link}`} className="hover:text-[var(--secondary)]">
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4">
                  Tools
                </h4>
                <ul className="space-y-2 text-md text-[var(--rv-white)]">
                  {tools.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="hover:text-[var(--secondary)]">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>



              {/* Get in Touch */}
              <div>
                <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4 ">
                  Get In Touch
                </h4>
                <ul className="space-y-5 text-sm text-[var(--rv-white)]">
                  <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                    <span><FaPhone className="" /></span>
                    <h5 className="font-medium">
                      <Link href={`tel:${sitedata?.mobile}`} className="hover:underline">
                        {sitedata?.mobile}
                      </Link>
                      {sitedata?.alternateMobile && (
                        <>
                          {", "}
                          <Link href={`tel:${sitedata.alternateMobile}`} className="hover:underline">
                            {sitedata.alternateMobile}
                          </Link>
                        </>
                      )}
                    </h5>


                  </li>
                  <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                    <FaEnvelope />
                    <h5 className="font-medium">
                      <Link
                        href={`mailto:${sitedata.email}`}
                      >
                        {sitedata?.email}
                      </Link>
                    </h5>
                  </li>
                  <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                    <FaMapLocation className="text-4xl" />
                    <h5 className="font-medium">
                      <a
                        href={sitedata?.mapurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {sitedata?.address}
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.div variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">

            <div className="disclaimer-sec text-center border-b border-gray-200">
              <div className="flex justify-center space-x-4 mb-5">
                {socialMedia?.map((item, index) => (

                  <Link key={index} href={item.url} className="p-2 border border-white rounded-full cursor-pointer">
                    {socialIconMap[item.title] ?? null}
                  </Link>

                ))}

              </div>

              <div className="content-b ">
                <p className="p-2 text-gray-300/90 flex flex-wrap items-center justify-center gap-1">
                  {amfisabilinks.map((item, index) => (
                    <span key={index}>
                      <Link
                        href={item.link}
                        className="hover:text-[var(--rv-white)]"
                        target={item.target || "_self"}
                        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                        download={item.link.endsWith(".pdf") ? true : undefined}
                      >
                        {item.title}
                      </Link>
                      {index !== amfisabilinks.length - 1 && <span> | </span>}
                    </span>
                  ))}
                </p>

                <p className="text-gray-200 mb-2">
                  <b>{sitedata.websiteName}</b> is an AMFI
                  Registered Mutual Fund Distributor.
                </p>
                <p className="text-gray-200 mb-2">
                  Disclaimer: Mutual fund investments are subject to market
                  risks. Please read the scheme information and other related
                  documents carefully before investing. Past performance is not
                  indicative of future returns. Please consider your specific
                  investment requirements before choosing a fund, or designing a
                  portfolio that suits your needs.
                </p>
                <p className="text-gray-200 mb-5">
                  <b>{sitedata.websiteName}</b> makes no warranties or representations,
                  express or implied, on products offered through the platform
                  of <b>{sitedata.websiteName}</b>. It accepts no liability for any
                  damages or losses, however, caused, in connection with the use
                  of, or on the reliance of its product or related services.
                  Terms and conditions of the website are applicable.
                  Investments in Securities markets are subject to market risks,
                  read all the related documents carefully before investing.
                </p>
                <div className="footer-content pb-4 flex flex-col  gap-10 items-center justify-center mt-2">
                  <div className="footer-list flex flex-col items-center md:flex-row gap-5 ">
                    <div className="image">
                      <img src="/amfi.jpg" height={100} width={100} />
                    </div>
                    <div className="contentb text-gray-200">
                      <p>AMFI Registered</p>
                      <p>ARN - {arnData[0]?.arn}</p>
                      <p>EUIN -{arnData[0]?.euins[0]?.euin}  </p>{" "}
                    </div>
                    <div className="footer-list">
                      <div className="image">
                        <img src="/mutualfund.png" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto mt-5 px-2 text-white">
          <div className=" flex flex-col md:flex-row justify-between">
            <div >
              <p>
                © Copyright 2025 - <strong className="text-gray-300/90 bold">{sitedata.websiteName}</strong>. All Right Reserved
              </p>
            </div>
            <div >
              <Link
                target="_blank"
                href="https://www.redvisiontechnologies.com/"
                className="hover:underline hover:text-[var(--rv-white)] me-4 md:me-6"
              >
                <p>Designed & Developed by REDVision Global Technologies</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
