"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode
    content: ReactNode
    side?: "top" | "bottom" | "left" | "right"; 
}

function TooltipWrapper(props: Props) {
    return <TooltipProvider delayDuration={0}>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipContent side={props.side}>{props.content}</TooltipContent>
    </TooltipProvider>
}

export default TooltipWrapper;