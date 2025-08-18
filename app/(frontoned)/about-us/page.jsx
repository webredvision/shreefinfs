import InnerBanner from "@/components/InnerBanner/InnerBanner";
import HeaderAboutus from "@/components/Aboutuspage/Header/header";
import { getAboutus, getAboutusteams, getmissionvission } from "@/lib/functions";
import WhoWeare from "@/components/Aboutuspage/whoweare";

export const metadata = {
  title: "About Us - Renaissance Financial Wealth",
  description:
    "Learn more about Renaissance Financial  Wealth, your trusted financial partner in India.",
};

const AboutUsPage = async () => {
  const aboutus = await getAboutus()
  const missionVission = await getmissionvission();
  const teams = await getAboutusteams()
  return (
    <div>
      <InnerBanner pageName="About Us" />
      <HeaderAboutus aboutus={aboutus} />
      <WhoWeare aboutus={aboutus} missionVission={missionVission} />
    </div>
  );
};

export default AboutUsPage;