"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";

import { FaPlay } from "react-icons/fa6";
import Image from "next/image";
import NewsCard from "../newscard";

export default function LatestNews() {
    const [ipodata, setIpodata] = useState([]);
    const [marketdata, setMarketdata] = useState([]);
    const [populardata, setPopulardata] = useState([]);
    const [activeCategory, setActiveCategory] = useState("ipo");
    const [data, setData] = useState([]);

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
    }, []);

    useEffect(() => {
        // Update displayed data when active category changes
        if (activeCategory === "ipo") setData(ipodata);
        else if (activeCategory === "market") setData(marketdata);
        else setData(populardata);
    }, [activeCategory, ipodata, marketdata, populardata]);

    return (
        <section className="md:py-16 px-3 md:px-0 py-10 lg:pr-1">
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden md:block">
                    <div className="relative">
                        <div className="">
                            <Image
                                src="/images/financial-news.webp"
                                alt="Choosing Us"
                                height={1000}
                                width={700}
                                className="shadow-lg object-cover w-full h-[600px] rounded-e-[5px]"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <Link
                            className={styles?.videoIcon}
                            href="https://www.youtube.com/watch?v=vU1l1TB7GzI"
                            target="_blank"
                            rel="noopener noreferrer"
                        > */}
                            <FaPlay className="absolute top-5 left-6" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    {/* <SectionHeading heading="News" title1="Financial" title2={"News"} /> */}

                    <div className="grid md:grid-cols-3 grid-cols-1 mb-7">
                        <div
                            className={`px-5 py-3 md:rounded-s-[5px] cursor-pointer ${activeCategory === "ipo" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-white text-center`}
                            onClick={() => setActiveCategory("ipo")}
                        >
                            IPO
                        </div>
                        <div
                            className={`px-5 py-3 cursor-pointer ${activeCategory === "market" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-white text-center`}
                            onClick={() => setActiveCategory("market")}
                        >
                            Market
                        </div>
                        <div
                            className={`px-5 py-3 md:rounded-e-[5px] cursor-pointer ${activeCategory === "upcoming" ? "bg-[var(--rv-secondary)]" : "bg-[var(--rv-primary)]"} text-white text-center`}
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
                                    <CarouselItem key={index} className="pl-1  sm:basis-1/2 lg:basis-1/3">
                                        <NewsCard item={item} key={index} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
