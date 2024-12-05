import React, { useState } from 'react';
import AppliedSection from './AppliedSection';
import PostedSection from './PostedSection';

export default function CardSection() {
    const [check, setCheck] = useState("applied");

    return (
        <div className='w-[97%] bg-gray-100 rounded-2xl flex-col ml-[1.5%] shadow-lg'>
            <div className='buttons flex gap-5 m-[2.5%]'>
                <button
                    className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300'
                    onClick={() => setCheck("applied")}
                >
                    Applied
                </button>
                <button
                    className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300'
                    onClick={() => setCheck("posted")}
                >
                    Posted
                </button>
            </div>

            <div className='p-4'>
                {check === 'applied' && <AppliedSection />}
                {check === 'posted' && <PostedSection />}
            </div>
        </div>
    );
}
