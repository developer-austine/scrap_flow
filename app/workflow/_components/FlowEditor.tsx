"use client"
import { workflow } from "@prisma/client"
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react"
import React from 'react'

import '@/xyflow/react/dist/style.css'

function FlowEditor({workflow}: {workflow: workflow}) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    return (
        <main className="h-full w-full">
        <ReactFlow
        nodes={nodes} 
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        >
            <Controls position="top-left" />
            <Background variant={BackgroundVariant.Dots} gap={12} />
        </ReactFlow>
    </main>
    )
}

export default FlowEditor