import React from 'react';
import { Link } from 'react-router-dom';
export default function BasicInfo({ role, location, salary }) {
  return (
    <div className="basicinfo h-[50vh] bg-black flex items-center flex-col gap-6 pt-11 relative">
      <h1 className='text-white text-5xl font-bold'>{role}</h1>
      <div className='innerbasic flex justify-center gap-12'>
        {/* Display location dynamically */}
        <div className='location flex gap-2 items-center'>
          <img src="./locationIcon.png" alt="Location Icon" className="h-9 w-9 rounded-full bg-white" />
          <p className='text-white'>{location}</p> {/* Dynamically displaying location */}
        </div>

        {/* Display salary dynamically */}
        <div className='location flex gap-2 items-center'>
          <img src="./moneyIcon.jpg" alt="Money Icon" className="h-9 w-9 rounded-full bg-black border-none" />
          <p className='text-white'>{salary}</p> {/* Dynamically displaying salary */}
        </div>
      </div>
      <div className='buttons flex gap-16'>
        <Link to="/findjob">
        <button className='bg-white text-black h-9 w-32 rounded-full hover:bg-gray-800 hover:text-white'>See all jobs</button>
        </Link>
        
        <button className='bg-green-400 text-black h-9 w-32 rounded-full hover:bg-green-500'>Apply now</button>
      </div>
    </div>
  );
}
