"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";


function page() {
  return (
    <div>
      <Meteors number={20} />
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs positin- relative" />
    
    </div>
    
  )
}

export default page


