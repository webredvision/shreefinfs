import formatDate from "@/lib/formatDate";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import { ConnectDB } from "@/lib/db/ConnectDB";
import BlogsModel from "@/lib/models/BlogModel";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Loader from "@/components/admin/common/Loader";
import { getSiteData, getSocialMedia } from "@/lib/functions";
import BlogCardsList from "@/components/blogcardslist";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const data = await BlogsModel?.findOne({ slug }).select('-_id, -keywords');
  return data ? data : [];
};

const getRecentBlog = async (slug) => {
  await ConnectDB();
  const data = await BlogsModel?.find({}).select('-_id, -content');
  return data ? data.map(item => item.toObject()) : [];
};

// SEO - dynamic
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  return {
    title: post?.metatitle,
    description: post?.description,
    keywords: post?.keywords,
  };
};

const SinglePostPage = async ({ params }) => {
  const siteData = await getSiteData();
  const socialMedia = await getSocialMedia();
  const { slug } = await params;
  const post = await getData(slug);
  const recentPost = await getRecentBlog();
  function createMarkup() {
    return { __html: post?.content }
  }
  const iconMap = {
    Facebook: <FaFacebookF className="text-[var(--rv-primary)]" />,
    Instagram: <FaInstagram className="text-[var(--rv-primary)]" />,
    Youtube: <FaYoutube className="text-[var(--rv-primary)]" />,
    Linkedln: <FaLinkedin className="text-[var(--rv-primary)]" />,
    Twitter: <FaXTwitter className="text-[var(--rv-primary)]" />
  };
  return (
    <div>
      <InnerBanner pageName={post?.posttitle} />
      <section className="max-w-screen-xl mx-auto md:px-0 px-3 main_section">
        {post ?
          (
            <div className="grid md:grid-cols-3 py-10 gap-6">
              <div className="md:col-span-2">
                <div className="mb-16 text-white">
                  <h2 className="font-bold mb-5">{post?.posttitle}</h2>
                  <div className="flex md:flex-row flex-col items-center gap-x-3">
                    <div className="">
                      <span className="font-medium">Published On </span>
                      <span className="text-purple-800 font-medium">
                        {formatDate(post?.createdAt)}
                      </span>
                    </div>
                    |
                    <div className="flex flex-wrap gap-x-3 items-center">
                      <span className="font-medium">{socialMedia.length !== 0 && "Follow Us"}</span>
                      {socialMedia
                        .filter((link) => !link.isHidden)
                        .map((link, index) => (
                          <Link key={index} target="_blank" href={link.url}>

                            <div
                              className={`text-2xl font-semibold uppercase w-9 h-9 border bg-[var(--rv-white)] rounded-full flex items-center justify-center `}
                            >
                              {iconMap[link.title] || <FaXTwitter className="text-[var(--rv-primary)]" />}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
                {post?.image?.url && (
                  <div>
                    <Image src={post?.image?.url}
                      alt={post?.image?.url}
                      width={900}
                      height={900}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded mx-auto" />
                  </div>
                )}
                <div className="mb-10">
                  <h1 className="">{post?.title}</h1>
                  <div className="my-5">
                    {post && (
                      <Suspense fallback={<div>Loading...</div>}>
                        <div dangerouslySetInnerHTML={createMarkup()} className="text-white" />
                      </Suspense>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 md:sticky md:top-10">
                <h4 className="font-medium text-white">Recent Posts</h4>
                <div className="gap-5 mb-10">
                  {recentPost?.reverse().slice(0, 6).map((item, index) => (
                    <div key={index}>
                      <Suspense fallback={<Loading />}>
                        <BlogCardsList item={item} />
                      </Suspense>
                    </div>
                  ))}
                </div>
                {/* <BannerForm /> */}
                <div className="mt-4 flex flex-wrap gap-x-3 items-center">
                  <span className="text-gray-600 font-medium">{socialMedia.length !== 0 && "Follow Us"}</span>
                  {socialMedia
                    .filter((link) => !link.isHidden)
                    .map((link, index) => (
                      <Link key={index} target="_blank" href={link.url}>

                        <div
                          className={`text-2xl font-semibold uppercase w-9 h-9 border bg-white rounded-full flex items-center justify-center `}
                        >
                          {iconMap[link.title] || <FaXTwitter className="text-[var(--rv-primary)]" />}
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )
        }
      </section>
    </div>
  );
};

export default SinglePostPage;