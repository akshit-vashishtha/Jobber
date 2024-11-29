import React from 'react'
import SearchSection from './SearchSection'
import JobSection from './JobSection'
export default function FindJob() {
  return (
    <div className='h-screen mt-4 ml-8 mr-8'>
        <div className=''>
            <h1 className='text-6xl'>Find Your Ideal Job!</h1>
        </div>
        <div className='searchSection h-[20%]'>
            <SearchSection/>
        </div>
        <div className=''>
            <JobSection/>
        </div>
        
    </div>
  )
}
