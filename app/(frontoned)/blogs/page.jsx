
import React from "react";
import { getBlogs } from "@/lib/functions";
import InnerBanner from "@/components/innerBanner/InnerBanner";
import style from "./BlogPage.modular.css"
import BlogCards from "@/components/blogcards";

const Blogs = async () => {
  const data = await getBlogs()
  return (
    <div className={`${style.BlogSection}`}>
      <InnerBanner pageName={"Blogs"} />
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {/* <Suspense fallback={<Loading />}> */}
          {data?.map((item, index) => (
            <div key={index} className="mx-auto">
              <BlogCards item={item} />
            </div>
          ))}
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
