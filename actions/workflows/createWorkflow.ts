"use server"

import prisma from "@/lib/prisma";
import { createWorkflowSchemaType, createWorkflowShema } from "@/schema/workflow"
import { workflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export async function CreateWorkflow(form:createWorkflowSchemaType) {
    const { success, data }= createWorkflowShema.safeParse(form)
    if(!success) {
        throw new Error("Invalid form data")
    }

    const { userId } = auth();

    if(!userId) {
        throw new Error("Unauthorized")
    }

    const result = await prisma.workflow.create({
        data: {
            userId,
            status: workflowStatus.DRAFT,
            definition: "TODO",
            ...data,
        }
    })

    if(!result) {
        throw new Error("Faileds to create the workflow")
    }

    redirect(`/workflow/editor/${result.id}`);
}