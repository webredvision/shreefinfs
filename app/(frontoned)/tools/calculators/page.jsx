"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { calculators, performance } from "@/data/calculators";
import styles from './Calculators.module.css'
import { useSearchParams } from 'next/navigation';
import InnerBanner from '@/components/InnerBanner/InnerBanner';

export default function Page() {
    const searchParams = useSearchParams();
    const [isMonthlySip, setIsMonthlySip] = useState(true);
    useEffect(() => {
        const tab = searchParams.get("tab");
        setIsMonthlySip(tab !== "performance"); // default is "calculator"
    }, [searchParams]);
    return (
        <div className="">
            <InnerBanner pageName={"Financial Tools"} />
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center main_section'>
                <div className="flex justify-center mb-14">
                    <div className="inline-flex border border-[var(--rv-primary)] rounded-full shadow-inner">
                        <Link
                            href={"/tools/calculators?tab=calculator"}
                            className={`px-10 md:px-20 py-1 text-lg font-medium border border-[var(--rv-primary)] hover:bg-[var(--rv-third)] rounded-l-full transition-all duration-300 ${isMonthlySip
                                ? "bg-[var(--rv-secondary)] text-white"
                                : "bg-[var(--rv-white)] text-black hover:text-white"
                                }`}
                        >
                            Calculators
                        </Link>
                        <Link
                            href={"/tools/calculators?tab=performance"}
                            className={`px-10 md:px-20 py-1 text-lg hover:bg-[var(--rv-third)] font-medium border border-[var(--rv-primary)] rounded-r-full transition-all duration-300 ${!isMonthlySip
                                ? "bg-[var(--rv-secondary)] text-white"
                                : "bg-[var(--rv-white)] text-black hover:text-white"
                                }`}
                        >
                            Performance
                        </Link>
                    </div>
                </div>
                {isMonthlySip ?
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {calculators.map((item, index) => (
                            <Link href={item.route} key={index} className={styles.cardsContainer}>
                                <div className={styles.calculatorBox}>
                                    <div >
                                        <Image src={item.image} alt='' width={60} height={60} className={styles.boxImage} />
                                    </div>
                                    <div>
                                        <p className='font-bold text-white text-md group-hover:text-gray-950 mb-5'>
                                            {item.title}
                                        </p>
                                        <p className='text-white text-md'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    :
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {performance.map((item, index) => (
                            <Link href={item.link} key={index} className={styles.cardsContainer}>
                                <div className={styles.calculatorBox}>
                                    <div>
                                        <Image src={item?.image} alt='' width={20} height={20} className={styles.boxImage} />
                                    </div>
                                    <div>
                                        <p className='font-bold text-white text-md group-hover:text-gray-950 mb-5'>
                                            {item.title}
                                        </p>
                                        <p className='text-white text-md'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div >
        </div>
    )
}