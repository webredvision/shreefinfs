import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "/rvdata/rvtools/env-files/shreefinfs.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "redvisionweb.com", "wealthelite.in"],
  },
};

export default nextConfig;
