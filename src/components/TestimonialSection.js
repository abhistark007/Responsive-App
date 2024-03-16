import React from 'react'
import quote from '../assets/testimonialassets/quote.png'
import play from '../assets/testimonialassets/play.png'
import profile from '../assets/testimonialassets/pf.png'
import mic from '../assets/testimonialassets/mic.png'
import './Testi.css'

function TestimonialSection() {
  return (
    <div className='w-full p-[100px] max-[600px]:p-0'>
        <div className='bg-[#F7F5F9] flex flex-col w-[80%] mx-auto p-[40px] gap-[32px] '>
            <div className='flex gap-4'>
                <img src={quote} alt="" />
                <div className='font-[600] text-[24px] leading-[36px] max-[600px]:text-[16px]'>Testimonials</div>
            </div>
            <div className='text-[18px] leading-[30px] tracking-[2%] font-[300] max-[600px]:text-[16px]'>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </div>

            <div className='flex justify-between max-[1000px]:flex-col-reverse max-[1000px]:gap-5'>
                <div className='relative flex w-full items-center gap-5 bg-[#CCC1DA] p-[15px] max-[600px]:hidden'>
                    <div className='bg-white rounded-full p-2 flex justify-center items-center cursor-pointer'>
                        <img src={play} alt="" />
                    </div>

                    <input type="range" className='w-full'/>
                    
                    <div className='relative'>
                        <img src={profile} alt="" className=''/>
                        <img src={mic} alt="" className='absolute -bottom-2 -left-2'/>
                    </div>

                </div>



                <div className='flex gap-5 items-center w-full justify-end max-[1000px]:justify-center'>
                    <img src={profile} alt="" />

                    <div className='flex flex-col gap-2'>
                        <div className='font-[600] text-[18px] leading-[27px] tracking-[2%] text-[#8064A2]'>Shubha Nagarajan</div>
                        <div className='font-[400] text-[14px] leading-[21px] tracking-[2%] text-[#0096C8]'>Classical Dancer</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TestimonialSection