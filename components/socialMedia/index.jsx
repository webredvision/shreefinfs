"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./social.module.css"
export default function SocialMediaSidebar() {
  return (
    <div className={`${styles.social_midia_f}`}>
      <ul className="flex flex-col space-y-3">
        <li>
          <Link href="http://wa.me/+919980337305" target="_blank" className="text-[var(--rv-white)] p-3 block bg-[#6BB543] transition rounded-3xl">
            <FaWhatsapp size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
