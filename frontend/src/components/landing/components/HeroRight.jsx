import React from 'react'
import Card from './Card'
export default function HeroRight() {
  return (
    <div className="flex items-center justify-center p-[15%]">
        <div className='cardSection flex flex-col items-center justify-center w-[100%] gap-10'>
            <Card heading="Find a Job!" tagline="Your Dream Job Awaits - Start Exploring Today!" buttonLabel="Explore" type="dashboard/findjob"/>
            <Card heading="Post a Job!" tagline="Find the Perfect Candidate - Post Your Job Now!" buttonLabel="Post" type="dashboard/postjob"/>
        </div>
    </div>
  )
}
