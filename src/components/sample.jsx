"use client"

import { useState} from "react"


import { Skeleton } from "@/components/ui/skeleton"

export default function Sample ({ onSampleChange, loading }) {

    const handleInput = (e) => {
        // Handle only numeric inputs
        if (e.target.value === "" || e.target.value < 1){
            e.target.value = ""
        }
        else if (e.target.value > 9999){
            e.target.value = 9999 
        }
        onSampleChange(e.target.value)
        
    }

    return (
        <div className="w-full">
        {loading ? (
            <Skeleton className="h-10 w-full" />
        ) : (
            <input type="number" placeholder="Sample size" className="border border-stone-200 p-1.5 rounded-lg focus:outline-none w-50" min="1" max="9999" onInput={handleInput}/>
        )}
        </div>
    )
}