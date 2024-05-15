import React, { useCallback } from 'react';
import './StressTest.css';
import { createNodesAndEdges } from './utils.js';
import ReactFlow, { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();


const StressTest = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => {
        setEdges((els) => addEdge(params, els))
    }, []);

    const updatePos = useCallback(() => {
        setNodes((nds) => {
            return nds.map((node) => {
                return {
                    ...node,
                    position: {
                        x: Math.random() * 1500,
                        y: Math.random() * 1500,
                    },
                };
            });
        }, []);
    });

    return (
        <div className='react-flow-div'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                minZoom={0}
            >
                <MiniMap />
                <Controls />
                <Background />

                <button
                    onClick={updatePos}
                    style={{
                        position: 'absolute',
                        right: '4rem',
                        top: '4rem',
                        zIndex: 4, 
                        padding: '1.4rem', 
                        fontSize: '1.4rem'
                    }}
                >
                    Change Position
                </button>
            </ReactFlow>
        </div>
    )
}

export default StressTest