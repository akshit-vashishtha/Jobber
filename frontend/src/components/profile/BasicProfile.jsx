import React from 'react'
import Cookies from "js-cookie";
export default function BasicProfile() {
    let userName = Cookies.get("name");
    let userDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, in rerum? Magni distinctio, voluptates perferendis aperiam adipisci modi veniam consequuntur nesciunt deserunt sunt error vel delectus a excepturi. Eius, aperiam."

    return (
        <div className='h-[40vh] w-[97%] bg-gray-100 m-5 rounded-2xl flex items-center gap-10 shadow-lg'>
            {/* Profile Photo Section */}
            <div className='profile-photo w-[18%] h-[80%] bg-gray-800 rounded-2xl ml-5'>
                <img src="./defaultProfileImage.png" className='h-[100%] w-[100%] rounded-2xl' alt="Profile" />
            </div>

            {/* Name and Description Section */}
            <div className='nameDesc h-[80%] w-[60%] bg-transparent rounded-2xl flex justify-center flex-col gap-5'>
                <h1 className='name text-2xl font-bold text-gray-800'>{userName.toUpperCase()}</h1>
                <p className='description text-lg text-gray-600'>{userDescription}</p>
            </div>
        </div>
    )
}
 