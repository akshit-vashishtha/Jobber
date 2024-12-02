import React from 'react'
import Card from './Card'
import { useState } from 'react';
export default function CardSection() {
    const [check,setCheck]=useState("applied");

  return (
    <div className='w-[97%] bg-gray-300 rounded-2xl flex justify-self-center ml-[1.5%] items-center gap-10 pt-5 pl-5'>
        <button className='h-[5vh] w-[10%] bg-black text-white rounded-full' onClick={()=>setCheck("applied")}>
            Applied
        </button>
        <button className='h-[5vh] w-[10%] bg-black text-white rounded-full' onClick={()=>setCheck("posted")}>
            Posted
        </button>

        <div className="w-full flex flex-wrap gap-4 mt-5">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Card info={check} />
          ))}
      </div>

    </div>
  )
}
