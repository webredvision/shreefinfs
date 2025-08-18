import HeroSection from "@/components/herosection/herosection";
import SubscribCard from "@/components/partners/partners";
import WhyChooseUs from "@/components/whytochooseus/whytochooseus";
import Calculator from "@/components/calculator/calculator";
import Blog from "@/components/blogs/blog";
import { FAQ } from "@/components/faq/faq";
import AdvisorCategory from "@/components/AdvisoryCategory/advisorycategory";
import Features from "@/components/features/features";
import { getAddisLogos, getArn, getBlogs, getFaqs, getSiteData, getTestimonials } from "@/lib/functions";
import MutalFundSection from "@/components/MutalfundSection/page";

export default async function Page() {
  const sitedata = await getSiteData();
  const testimonials = await getTestimonials();
  const blogs = await getBlogs();
  const amclogos = await getAddisLogos()
  const Faqs = await getFaqs()

  return (
    <div className="">
      <main className="overflow-x-hidden">
        <HeroSection sitedata={sitedata} />
        {/* <Feaures /> */}
        <AdvisorCategory />
        <WhyChooseUs />
        <Calculator />
        <MutalFundSection />
        <SubscribCard amclogos={amclogos} />
        {/* <Testimonials testimonials={testimonials} /> */}
        <Blog blogs={blogs} />
        <FAQ Faqs={Faqs} />
      </main>
    </div>
  );
}