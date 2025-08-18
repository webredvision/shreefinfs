"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./InnerBanner.module.css";

const InnerBanner = ({ pageName, showBreadcrumb = true, subpages }) => {
  return (
    <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/inner-banner-01.jpg')] overflow-hidden text-start justify-start items-center h-64">
      <div className="max-w-screen-xl mx-auto text-center items-center mt-20">
        <h1 className="text-[var(--rv-white)] text-3xl md:text-5xl font-bold">
          {pageName}
        </h1>

        {/* {showBreadcrumb && (
          <div className="text-[var(--rv-white)] flex justify-center items-center gap-2 mt-4">
            <Link href="/">Home</Link>
            <span>/</span>
            {subpages ? (
              <>
                <Link href={`/${pageName.toLowerCase().replace(/\s/g, '-')}`} className="capitalize">
                  {subpages}
                </Link>
                <span>/</span>
                <span className="capitalize">{pageName}</span>
              </>
            ) : (
              <span className="capitalize">{pageName}</span>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InnerBanner;