"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>Counter Component</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>This is a placeholder for the Counter component.</p>
        </div>
    );
}