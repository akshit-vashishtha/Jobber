import React from 'react'
import Card from './Card'
export default function HeroRight() {
  return (
    <div className=" h-[100%] w-[100%]">
        <div className='cardSection flex flex-col items-center justify-center gap-[5%] h-[100%] w-[100%] '>
            <Card heading="Find a Job!" tagline="Your Dream Job Awaits - Start Exploring Today!" buttonLabel="Explore" type="findjob"/>
            <Card heading="Post a Job!" tagline="Find the Perfect Candidate - Post Your Job Now!" buttonLabel="Post" type="postjob"/>
        </div>
    </div>
  )
}
