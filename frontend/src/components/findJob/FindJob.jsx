import React from 'react'
import SearchSection from './SearchSection'
import JobSection from './JobSection'
import Footer from '../Footer'
import { useState } from 'react'
export default function FindJob() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='h-screen mt-[1%] ml-[2%] mr-[2%]'>
        <div className=''>
            <h1 className='text-6xl'>Find Your Ideal Job!</h1>
        </div>
        <div className='searchSection'>
            <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
        <div className=''>
            <JobSection searchQuery={searchQuery}/>
        </div>
        
    </div>
  )
}
