'use client'

import { useState } from "react";

export const Counter = () => {
    console.log("Counter Component");
    const [count, setCount] = useState<number>(0);

    return <button onClick={() => setCount(count + 1)} className="bg-red-600 px-4 py-2 rounded-xl">
        Clicked button {count} times
    </button>
}   