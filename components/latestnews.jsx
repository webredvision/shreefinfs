"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import NewsCard from "./newscard";

export default function LatestNews() {
    const [ipodata, setIpodata] = useState([]);
    const [marketdata, setMarketdata] = useState([]);
    const [populardata, setPopulardata] = useState([]);
    const [activeCategory, setActiveCategory] = useState("ipo"); // Track selected category
    const [data, setData] = useState([]); // Data to be displayed

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching all data in a single API call
                const ipoRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/ipo-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                const marketRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/market-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                const popularRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/popular-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);

                if (ipoRes.status === 200 && marketRes.status === 200 && popularRes.status === 200) {
                    setIpodata(ipoRes.data);
                    setMarketdata(marketRes.data);
                    setPopulardata(popularRes.data);

                    // Set the initial data to display based on the active category
                    if (activeCategory === "ipo") setData(ipoRes.data);
                    else if (activeCategory === "market") setData(marketRes.data);
                    else setData(popularRes.data);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array to run this only once

    useEffect(() => {
        // Update displayed data when active category changes
        if (activeCategory === "ipo") setData(ipodata);
        else if (activeCategory === "market") setData(marketdata);
        else setData(populardata);
    }, [activeCategory, ipodata, marketdata, populardata]); // Re-run when activeCategory or data changes

    return (
        <div className="max-w-screen-xl mx-auto main_section text-center">
            
<h2
        className="text-4xl text-[var(--rv-white)] font-bold mb-4"
        // variants={fadeInUp}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
      >
        Latest{" "}
        <span className="text-[var(--rv-secondary)]">News</span>
      </h2>
            <section className="">
                
            <div>
                <div className="gap-4 flex flex-col md:flex-row ">
                   
                    <div className=" w-full ">
                    <div className="mb-6">
                 
                </div>

                        {/* Buttons with active class and hover effect */}
                        <div className="grid md:grid-cols-3 grid-cols-1 mb-6">
                            <div
                                className={`px-5 py-3 rounded-s-lg cursor-pointer ${activeCategory === "ipo" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-[var(--rv-white)] text-center`}
                                onClick={() => setActiveCategory("ipo")}
                            >
                                IPO
                            </div>
                            <div
                                className={`px-5 py-3 cursor-pointer ${activeCategory === "market" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-[var(--rv-white)] text-center`}
                                onClick={() => setActiveCategory("market")}
                            >
                                Market
                            </div>
                            <div
                                className={`px-5 py-3 rounded-e-lg cursor-pointer ${activeCategory === "upcoming" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-[var(--rv-white)] text-center`}
                                onClick={() => setActiveCategory("upcoming")}
                            >
                                Upcoming
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <Carousel
                                className="mx-auto"
                                plugins={[
                                    Autoplay({
                                        delay: 1500,
                                    }),
                                ]}
                            >
                                <CarouselContent className="-ml-1">
                                    {data?.map((item, index) => (
                                        <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3">
                                            <NewsCard item={item} key={index} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
