import React from 'react'
import BasicProfile from './BasicProfile'
import CardSection from './CardSection'
export default function Profile() {
  
  return (
    <div className='w-[96%] bg-slate-200 flex justify-self-center justify-center mt-5 rounded-2xl gap-2 flex-col'>
        <BasicProfile/>
        <CardSection/>
    </div>
  )
}
