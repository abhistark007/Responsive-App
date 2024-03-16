import React from 'react'
import groupPic from '../assets/getstartedassets/grouppic.png'

function GetStartedSection() {
  return (
    <div className='bg-[#F7FDFF] w-full pl-[100px] pr-[100px] pt-[100px] pb-[40px] max-[1000px]:pl-0 max-[1000px]:pr-0'>
        <div className='w-[80%] mx-auto flex flex-col gap-[100px] max-[1000px]:w-[90%]'>
            <div className='flex flex-col gap-[30px]'>
                <div className='font-[500] italic text-[36px] leading-[54px]'>Your <span className='text-[#8064A2]'>Hobby,</span> Your <span className='text-[#0096C8]'>Community...</span></div>
                <div className='bg-[#8064A2] rounded-[8px] px-[16px] py-[8px] text-[20px] w-fit text-white font-[600]'>
                    Get Started
                </div>
            </div>

            <img src={groupPic} alt="" />

        </div>
    </div>
  )
}

export default GetStartedSection