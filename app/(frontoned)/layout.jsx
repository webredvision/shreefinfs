import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { getArn, getServiceData, getSiteData, getSocialMedia } from "@/lib/functions";

export default async function Layout({ children }) {
    const sitedata = await getSiteData();
    const socialMedia = await getSocialMedia();
    const arnData = await getArn();
    const services = await getServiceData();

    return (
        <div className="">
            <Navbar sitedata={sitedata} services={services} />
            {children}
            <Footer sitedata={sitedata} socialMedia={socialMedia} arnData={arnData} services={services} />
        </div>
    );
}