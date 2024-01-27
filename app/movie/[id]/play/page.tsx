"use client"
import React from 'react'
import SingleMediaPlayer from '@/components/Common/SingleMediaPlayer'
import { useSearchParams, usePathname } from 'next/navigation'

const MoviePlayerPage = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const id = pathname.split('/')[2]
    // const type = pathname.split('/')[1]

    return (
        <div className="w-full bg-[#151517] rounded-l-lg overflow-hidden">
            <SingleMediaPlayer id={id} type={"movie"} queryEpisode={1} querySeason={1}  />
        </div>
    )
}

export default MoviePlayerPage