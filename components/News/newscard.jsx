import formatDate from '@/lib/formatDate';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ item }) => {
    return (
        <div className="p-1">
            <Link href={item?.link} target="_blank">
                <div className="max-w-sm max-h-[390px] min-h-[390px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform relative">
                    <img className="rounded-t-lg w-full h-52" src={item?.image} alt="" />
                    <div className="absolute top-2 left-2 text-sm py-1 px-2 bg-stone-900 text-white border-2 border-white rounded-full">
                        {formatDate(item?.pubDate)}
                    </div>
                    <div className="p-4">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">{item.title.slice(0, 40)}...</h5>
                        <p className="mb-3 font-normal text-gray-700 line-clamp-3">{item.description.slice(0, 80)}...</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NewsCard;