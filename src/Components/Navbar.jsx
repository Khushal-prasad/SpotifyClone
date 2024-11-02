import React from 'react'
import { assets } from '../assets/assets'
import { Route, useNavigate } from 'react-router-dom'
import Explore from './Explore'


const Navbar = () => {

    const navigate = useNavigate(onclick)


    return (
        <>
          
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='' />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='' />
                </div>
                <div className='flex items-center gap-4'>
                    <a href='./Explore' className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore premium</a>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install app</p>
                    <img className='w-7 h-7 rounded-full flex items-center justify-center' src='https://i.pinimg.com/236x/a2/29/65/a22965db35d4de3837b07c7aa360217a.jpg' alt='' />
                </div>

            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
            </div>
        </>
    )
}

export default Navbar