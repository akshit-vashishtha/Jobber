import React from 'react'
import SearchSection from './SearchSection'
import JobSection from './JobSection'
import Footer from '../Footer'
export default function FindJob() {
  return (
    <div className='h-screen mt-[1%] ml-[2%] mr-[2%]'>
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
