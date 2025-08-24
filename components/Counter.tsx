"use client";
import { useState } from "react";
import Image from "next/image";
export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>Counter Component</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Current Count: {count}</p>
                    <Image
                        src="/kaved.jpg"
                        alt="Gummy Bear Image"
                        width={200}
                        height={300}
                    />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>This is a placeholder for the Counter component.</p>
        </div>
    );
}