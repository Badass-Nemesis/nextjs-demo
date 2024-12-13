'use client'

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    // const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    console.log("Counter Component");
    const [count, setCount] = useState<number>(0);

    // if (!isLoaded || !userId) {
    //     return null;
    // }
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <button onClick={() => setCount(count + 1)} className="bg-red-600 px-4 py-2 rounded-xl">
        Clicked button {count} times
    </button>
}   