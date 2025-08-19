import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCardsList = ({ item }) => {
    return (
        <div className="p-1">
            <Link href={`/blogs/${item.slug}`}>
                <div className="max-w-xl bg-[var(--rv-primary)] border-[var(--rv-secondary)] rounded-lg shadow flex">
                    <Image className="rounded-s-lg" src={item?.image?.url} alt={item?.image?.url} width={140} height={100} />
                    <div className="p-3">
                        <h5 className="text-white mb-2 text-lg font-medium tracking-tight line-clamp-2">{item.posttitle}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCardsList