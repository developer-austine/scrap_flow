
import { cn } from '@/lib/utils'
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function Logo({
    fontSize = "text-2x1",
    iconSize = 20
}: {
    fontSize?:string;
    iconSize?: number;
}) {
    return(
        <Link href="/"
         className={ cn("text-2x1 font-extrabold flex items-center gap-2",
            fontSize
         )}
        >

         <div className="rounded-x1 bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
            <SquareDashedMousePointer size={iconSize} />
         </div>
         <div>
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Flow
                <span className="text-stone-700 dark:text-stone-300"> Scrape</span>
            </span>
         </div>
         </Link>
    )
}

export default Logo