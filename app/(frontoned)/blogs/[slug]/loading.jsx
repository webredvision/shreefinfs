import Loader from '@/components/admin/common/Loader'
import React from 'react'

export default function Loading() {
    return (
        <section className="max-w-screen-xl mx-auto md:px-0 px-3">
            <Loader />
        </section>
    )
}