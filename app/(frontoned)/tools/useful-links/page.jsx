'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InnerBanner from '@/components/InnerBanner/InnerBanner';
import styles from './UsefulLinks.module.css'
import Image from 'next/image';

const UsefulLinksPage = () => {
  const [usefulLink, setUsefulLink] = useState([]);
  const fetchLinks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/useful-links?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    if (res.ok) {
      const data = await res.json();
      setUsefulLink(data)
    }
  };
  // useEffect(() => { fetchservice(); }, []);
  useEffect(() => { fetchLinks(); }, []);
  return (
    <div className="">
      <InnerBanner pageName={"Useful Links"} />
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center lg:my-[100px] my-[50px] lg:px-0 md:px-2 px-4'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {usefulLink.map((link, index) => (
            <Link href={link.link} key={index} className={styles.cardsContainer}>
              <div
                className={styles.usefulBox}
              >
                <h3 className="text-xl font-semibold mb-4">{link?.title}</h3>
                <p className="line-clamp-4">{link?.description}</p>
                <Image
                  src={`https://redvisionweb.com${link.image}` || "/placeholder-image.jpg"}
                  alt={link?.title}
                  width={80}
                  height={80}
                  className={styles.boxImage}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UsefulLinksPage;
