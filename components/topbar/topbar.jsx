import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className=" w-full  py-2 text-sm">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
            <MdOutlineMail className="text-[var(--secondary)] text-lg"/>
          <Link href="mailto:JRGADAADVISORS@GMAIL.COM" className="hover:underline">
          JRGADAADVISORS@GMAIL.COM
          </Link>
          <IoMdCall className="text-[var(--secondary)] text-lg"/>
          <span>+91 9969798508 </span>
        </div>

        {/* Social Links (Hidden on Small Screens) */}
        <div className="hidden lg:flex space-x-3">
          <Link href="#" >
            <FaTwitter className="text-[var(--secondary)] text-lg"/>
          </Link>
          <Link href="#" >
            <FaFacebook className="text-[var(--secondary)] text-lg" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-[var(--secondary)] text-lg"/>
          </Link>
          <Link href="#" >
            <FaLinkedin className="text-[var(--secondary)] text-lg"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
