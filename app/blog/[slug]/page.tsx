import React from 'react';

export default function BlogbyIdPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    
    return (
        <>
            <div>
                <h1>This is the blog by id page</h1>
                <p>ID: {slug} </p>
            </div>
        </>
    )
}