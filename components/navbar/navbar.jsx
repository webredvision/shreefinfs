"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { productData } from "@/data/services";
import CryptoJS from "crypto-js";


const Navbar = ({ services }) => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownTools, setOpenDropdownTools] = useState(false);
  const [openProducts, setopenProducts] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOption, setisSearchOption] = useState(false);
  const searchRef = useRef(null);
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
  const debounceTimeout = useRef(null);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change '10' to the scroll threshold you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMainClick = (type) => {
    if (isMobile) {
      if (type === "services") {
        setOpenDropdown(!openDropdown);
      } else if (type === "tools") {
        setOpenDropdownTools(!openDropdownTools);
      } else if (type === "products") {
        setopenProducts(!openProducts);
      }
    }
  };

  const fetchSearchResults = async (query) => {

    if (!query) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/all-scheme-portfolio?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (response.status === 200) {
        const data = response.data.data;
        const filteredResults = data.filter((item) =>
          item.funddes.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
        setIsSearchOpen(true);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      fetchSearchResults(query);
    }, 200); // wait 500ms after user stops typing
  };

  const handleSelectScheme = (items) => {
    const dataToStore = {
      pcode: items.pcode,
      timestamp: Date.now(),
    };


    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();

    localStorage.setItem("encryptedFundData", encrypted);
    const slug = items.funddes
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");

    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
    // const url = `/performance/single-fund/${slug}?pcode=${items.pcode}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    window.location.href = "/performance/single-fund";
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 ${isMobileMenuOpen
        ? "bg-[var(--rv-secondary)]"
        : isScrolled
          ? "bg-[var(--rv-white)] shadow-lg"
          : "bg-transparent text-white"
        }`}
    >
      <nav
        className={` max-w-screen-xl mx-auto   transition-colors duration-300 `}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto py-2">
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="logo"
              width={130}
              height={200}
              className={`rounded ${isScrolled ? 'bg-white' : 'bg-white p-2'}`}
            // layout="responsive"
            />
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg rounded-lg hover:bg-[var(--rv-bg-secondary)] focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg rounded-lg hover:bg-[var(--rv-secondary)] focus:outline-none"
              aria-expanded={isSearchOption}
              onClick={() => setisSearchOption(!isSearchOption)}
            >
              <span className="sr-only">Toggle search</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div
            className="relative hidden lg:block mt-2 lg:mt-0 lg:ml-4 w-full lg:w-auto"
            ref={searchRef}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Funds..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-gray-300 text-gray-700 bg-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500 rounded-full w-full lg:w-80 pl-10 pr-10 py-2"
              />

              {/* Search Icon */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              {/* Cancel (Clear) Icon */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Dropdown Results */}
            <AnimatePresence>
              {isSearchOpen && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-white z-10 rounded-lg shadow-lg w-full lg:w-80 max-h-60 overflow-y-auto ring-1 ring-gray-700"
                >
                  <ul className="py-2 text-sm">
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <div
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => handleSelectScheme(result)}
                        >
                          {result.funddes}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {isSearchOption && (
            <div
              className="relative lg:hidden mt-2 lg:mt-0 lg:ml-4 w-full lg:w-auto"
              ref={searchRef}
            >
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Funds..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="border border-gray-500 text-gray-700 bg-red-400 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500 rounded-full w-full lg:w-80 pl-10 pr-10 py-2"
                />

                {/* Search Icon */}
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                {/* Cancel (Clear) Icon */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Dropdown Results */}
              <AnimatePresence>
                {isSearchOpen && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-2 bg-white z-10 rounded-lg shadow-lg w-full lg:w-80 max-h-60 overflow-y-auto ring-1 ring-gray-700"
                  >
                    <ul className="py-2 text-sm">
                      {searchResults.map((result, index) => (
                        <li key={index}>
                          <div
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => handleSelectScheme(result)}
                          >
                            {result.funddes}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div
            className={`${isMobileMenuOpen ? "block" : "hidden"
              } w-full lg:block lg:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-5 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:items-center text-lg">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded md:bg-transparent ${path === "/" ? "text-[var(--rv-primary)]" : ""
                    } lg:p-0 hover:text-[var(--rv-secondary)]`}
                  aria-current="page"
                >
                  <p className="font-medium hover:text-[var(--rv-secondary)]">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`font-semibold block py-2 px-3 rounded md:bg-transparent ${path === "/about-us"
                    ? "text-[var(--rv-primary)]"
                    : ""
                    } lg:p-0 md:hover:text-[var(--rv-primary)]`}
                >
                  <p className="hover:text-[var(--rv-secondary)]">
                    About Us
                  </p>
                </Link>
              </li>
              <li
                className={`relative ${!isMobile ? "group" : ""}`}
                onMouseEnter={
                  !isMobile ? () => setOpenDropdown(true) : undefined
                }
                onMouseLeave={
                  !isMobile ? () => setOpenDropdown(false) : undefined
                }
              >
                <button
                  id="dropdownServicesLink"
                  className="flex items-center justify-between w-full py-2 px-3 hover:text-[var(--rv-secondary)] md:hover:bg-transparent  lg:p-0 lg:w-auto font-semibold"
                  onClick={() => handleMainClick("services")}
                >
                  <p className="hover:text-[var(--rv-secondary)]">
                    Services
                  </p>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 z-10 ${openDropdown ? "block" : "hidden"
                    } ${!isMobile ? "lg:hidden lg:group-hover:block" : ""
                    } bg-white divide-y divide-gray-900 rounded-lg shadow-lg w-full lg:w-72 ring-2`}
                >
                  <ul className="py-2 text-sm text-gray-800 max-h-[400px] overflow-y-auto">
                    {services.map((service, index) => (
                      <li key={index} className="group relative">
                        <Link
                          href={`/services/${service.link}`}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`relative ${!isMobile ? "group" : ""}`}
                onMouseEnter={
                  !isMobile ? () => setOpenDropdownTools(true) : undefined
                }
                onMouseLeave={
                  !isMobile ? () => setOpenDropdownTools(false) : undefined
                }
              >
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 hover:text-[var(--rv-secondary)] lg:hover:bg-transparent lg:border-0  lg:p-0 lg:w-auto font-semibold"
                  onClick={() => handleMainClick("tools")}
                >
                  <p>Tools</p>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 z-10 ${openDropdownTools ? "block" : "hidden"
                    } ${!isMobile ? "lg:hidden lg:group-hover:block" : ""
                    } bg-white divide-y divide-gray-900 rounded-lg shadow w-full lg:w-60 ring-2`}
                >
                  <ul
                    className="py-2 text-sm text-gray-800"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    {/* <li>
                      <Link
                        href="/tools/download-forms"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Download Forms
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/tools/calculators"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Financial Calculators
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/financial-health"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Financial Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/risk-profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Risk Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/pay-premium-online"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pay Premium Online
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/useful-links"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Useful links
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <Link
                  href="/blogs"
                  className={`block py-2 px-3 text-gray-800 rounded bg-transparent ${
                    path === "/blogs"
                      ? "text-[var(--rv-white)] hover:text-[var(--rv-secondary)]"
                      : "md:text-gray-800"
                  } lg:p-0 `}
                >
                  <p className="font-medium text-[var(--rv-white)] hover:text-[var(--rv-secondary)]">
                    Blogs
                  </p>
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className={`block font-semibold py-2 px-3 rounded ${path === "/contact-us"
                    ? "text-[var(--rv-primary)]"
                    : ""
                    } lg:p-0 md:hover:text-[var(--rv-primary)]`}
                >
                  <p className="hover:text-[var(--rv-secondary)]">
                    Contact Us
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={`font-semibold block py-2 px-3 rounded md:bg-transparent ${path === "/login"
                    ? "text-[var(--rv-primary)]"
                    : ""
                    } lg:p-0 `}
                >
                  <p className="hover:text-[var(--rv-primary)]">
                    Login
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
