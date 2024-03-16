import React from 'react'
import logo from '../assets/navbarassets/hobbycuelogo.png'
import search from '../assets/navbarassets/iconsearch.png'
import explore from '../assets/navbarassets/Explore.png'
import hobbies from '../assets/navbarassets/Hobbies.png'
import bookmark from '../assets/navbarassets/bookmark.png'
import noti from '../assets/navbarassets/noti.png'
import cart from '../assets/navbarassets/cart.png'
import expandarrow from '../assets/navbarassets/expandarrow.png'
import menu from '../assets/navbarassets/menu.png'

function Navbar() {
  return (
    <div className='bg-white w-full min-h-[80px]'>
        <div className='flex w-[90%] mx-auto  justify-between items-center pt-4 pb-4  '>
            <div>
                <img src={logo} alt="logo" className='w-[293.26px]'/>
            </div>

            <div className='flex relative items-center max-[1300px]:hidden'>
                <input type="text" className='w-[300px] h-[40px]  rounded-l-[8px] bg-[#EBEDF0]'/>
                <div className='flex items-center justify-center bg-[#8064A2] h-[40px] w-[40px] rounded-r-[8px]'>
                    <img src={search} alt="search" className='h-[16px] w-[16px]'/>
                </div>
            </div>

            <div className='flex min-[1300px]:hidden gap-5 mr-5'>
                <img src={search} alt="" className=' w-[24px]' />
                <img src={noti} alt=""  className='w-[24px]' />
                <img src={menu} alt=""  className=' w-[24px]' />
            </div>

            <div className='flex gap-6 items-center max-[1300px]:hidden'>
                <div className='flex items-center'>
                    <img src={explore} alt="" />
                    <div>Explore</div>
                    <img src={expandarrow} alt="" />
                </div>

                <div className='flex items-center'>
                    <img src={hobbies} alt="" />
                    <div>Hobbies</div>
                    <img src={expandarrow} alt="" />
                </div>

                <div>
                    <img src={bookmark} alt="" />
                </div>

                <div>
                    <img src={noti} alt="" />
                </div>

                <div>
                    <img src={cart} alt="" />
                </div>

                <div className='mr-4 border-[#8064A2] border-[1px] rounded-[8px] w-[112px] h-[40px] text-[#8064A2] flex justify-center items-center'>
                    Sign In
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar