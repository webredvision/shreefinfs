import Link from 'next/link'
import React from 'react'

const BlogCards = ({ item }) => {
    return (
        <div className="p-1">
            <Link href={`blogs/${item.slug}`}>
                <div className="max-w-sm max-h-96 min-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={item?.image?.url} alt={item?.image?.url} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[var(--rv-white)]">{item.posttitle}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.posttitle}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCards