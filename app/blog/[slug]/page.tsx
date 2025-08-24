'use client';

import React, {useState} from 'react';

export default function BlogbyIdPage({ params }: { params: { slug: string } }) {
    const [someState, setSomeState] = useState(0);
    const { slug } = params;
    console.log("slug:", slug);
    
    return (
        <>
            <div>
                <h1>This is the blog by id page</h1>
                <p>ID: {slug} </p>
            </div>
        </>
    )
}