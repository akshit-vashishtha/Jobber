import React from 'react'

export default function BasicProfile() {
    let userName="akshit vashishtha";
    let userDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, in rerum? Magni distinctio, voluptates perferendis aperiam adipisci modi veniam consequuntur nesciunt deserunt sunt error vel delectus a excepturi. Eius, aperiam."
  return (
    <div className='h-[40vh] w-[97%] bg-gray-300 m-5 rounded-2xl flex items-center gap-10'>
        <div className='profile-photo w-[18%] h-[80%] bg-white rounded-2xl ml-5'>
            <img src="./defaultProfileImage.png" className='h-[100%] w-[100%] rounded-2xl' alt="" />
        </div>
        <div className='nameDesc h-[80%] w-[60%] bg-transparent rounded-2xl flex justify-center flex-col gap-5'>
            <h1 className='name text-2xl font-bold'>{userName.toUpperCase()}</h1>
            <p className='description text-l'>{userDescription}</p>
        </div>
    </div>
  )
}
