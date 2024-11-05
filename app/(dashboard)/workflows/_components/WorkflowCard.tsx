"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { workflowStatus  } from '@/types/workflow'
import { workflow } from '@prisma/client'
import { FileTextIcon, MoreVerticalIcon, PlayIcon, ShuffleIcon } from 'lucide-react'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import TooltipWrapper from '@/components/TooltipWrapper'

const statusColors = {
    [workflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [workflowStatus.PUBLISHED]: "bg-primary",
}

function WorkflowCard({workflow}: {workflow: workflow}) {
    const isDraft = workflow.status === workflowStatus.DRAFT

    return <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
        <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-3">

            <div className={cn("w-10 h-10 rounded-full flex items-center  justify-center",
            statusColors[workflow.status as workflowStatus]    
            )}>
                {isDraft ? <FileTextIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5 text-white" />}
            </div>
            <div className="">
                <h3 className="text-base font-bold text-muted-foreground flex items-center">
                    <Link href={`/workflow/editor/${workflow.id}`} className="flex items-center hover:underline"
                    >
                        {workflow.name}
                    </Link>
                    {isDraft && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Darft</span>
                    )}
                </h3>
            </div>
        </div>    

        <div className="flex items-center space-x-2">
         <Link href={`/workflow/editor/${workflow.id}`} className={cn(buttonVariants({
            variant: "outline",
            size: "sm"
         }),
            "flex items-center gap-2"
         )}>
            <ShuffleIcon size={10} />
            Edit
         </Link>
         <WorkflowActions />
        </div>
        </CardContent>
    </Card>
}

function WorkflowActions() {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
                <TooltipWrapper content={"More actions"}>
                    <MoreVerticalIcon size={18} />
                </TooltipWrapper>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
        </DropdownMenuContent>
    </DropdownMenu>
}

export default WorkflowCard