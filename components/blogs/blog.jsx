import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const Blog = ({ blogs }) => {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto main_section">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-[var(--rv-white)] items-center text-center" initial={{ x: -100, opacity: 0 }}
        // animate={isInView ? { x: 0, opacity: 1 } : {}}
        // transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our <span className="text-[var(--rv-primary)]">Blogs</span>
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-3">
          {blogs.slice(0, 3).map((blog, index) => {
            const dateObj = new Date(blog.updatedAt);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString("en-US", { month: "short" }); // e.g., "Oct"
            const year = dateObj.getFullYear();

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[var(--rv-bg-secondary)] to-[var(--rv-secondary)] shadow-lg rounded-lg overflow-hidden relative"
              >
                {/* Date Badge */}
                <div className="absolute top-0 right-0 w-[70px] h-[85px] bg-[var(--rv-white)] text-center p-[12px_0] rounded-br-[10px] rounded-tl-[10px] z-5 text-black flex flex-col items-center justify-center">
                  <FaCalendar className="mb-1" />
                  <span className="block text-xl font-bold">{day}</span>
                  <p className="text-sm">
                    {month} {year}
                  </p>
                </div>

                {/* Blog Image */}
                <div className="h-50 overflow-hidden items-center p-5">
                  <Image
                    src={blog.image.url}
                    alt="blog"
                    height={400}
                    width={400}
                    className="hover:scale-105 bg-white overflow-hidden transform transition duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-5 relative">
                  <h4 className="text-xl font-semibold mb-2">
                    <Link href={`/blogs/${blog.slug}`} className="text-white transition">
                      {blog.posttitle}
                    </Link>
                  </h4>
                  <p className="text-gray-200 mb-4 line-clamp-2">{blog.description}</p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-[var(--rv-white)] font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;