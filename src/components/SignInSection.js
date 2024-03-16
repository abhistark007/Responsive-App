import React from 'react'
import gp from '../assets/signinsectionassets/gp.png'
import Google from '../assets/signinsectionassets/Google.png'
import Facebook from '../assets/signinsectionassets/Facebook.png'
import eye from '../assets/signinsectionassets/eye.png'
import lock from '../assets/signinsectionassets/lock.png'

function SignInSection() {
    return (
        <div className='bg-[#F7F5F9] w-full'>
            <div className='flex w-[80%] mx-auto gap-[80px] pt-[100px] max-[800px]:flex-col'>
                {/* left */}
                <div className='flex flex-col flex-1 gap-[35px]'>
                    <div className='font-[500] italic text-[36px] leading-[54px]'>Explore Your <span className='text-[#0096C8]'>Hobby,</span> or <span className='text-[#8064A2]'>passion</span></div>
                    <div>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</div>
                    <div>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</div>
                    <img src={gp} alt="" className='max-[800px]:hidden'/>
                </div>






                {/* right */}
                <div className='flex flex-col flex-1 gap-[25px]'>
                    <div className='flex font-[700] text-[20px] leading-[30px] gap-4 text-[#939CA3]'>
                        <div className='hover:text-[#8064A2] hover:border-b-4 hover:border-[#80642] duration-200 cursor-pointer'>Sign in</div>
                        <div className='hover:text-[#8064A2] hover:border-b-4 hover:border-[#80642] duration-200 cursor-pointer'>Join in</div>
                    </div>

                    <div className='cursor-pointer flex rounded-[8px] border-[#8064A2] border-2 font-[600] text-[14px] leading-[16px] p-[12px] justify-center items-center relative'>
                        <img src={Google} alt="" className='absolute left-4 size-5 ' />
                        <p>Continue with Google</p>
                    </div>

                    <div className='cursor-pointer flex rounded-[8px] border-[#8064A2] border-2 font-[600] text-[14px] leading-[16px] p-[12px] justify-center items-center relative'>
                        <img src={Facebook} alt="" className='absolute left-4 size-5 ' />
                        <p>Continue with Facebook</p>
                    </div>

                    <div className='flex  items-center justify-center gap-2'>
                        <div className='flex-1 border-2 h-1'></div>
                        <div className=''>Or Connect With</div>
                        <div className='flex-1 border-2 h-1'></div>

                    </div>

                    <div className='flex w-full'>
                        <input type="text" className='bg-white w-full rounded-[8px] p-2 pl-4' placeholder='Email' />
                    </div>

                    <div className='flex relative w-full'>
                        <input type="text" className='bg-white w-full rounded-[8px] p-2 pl-4' placeholder='Password' />
                        <div className='absolute right-3 flex justify-center items-center h-full cursor-pointer'>
                            <img src={eye} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-5'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <img src={lock} alt="" className='w-[16px] h-[16px]'/>
                            <label htmlFor="remember">Forgotten Password</label>
                        </div>
                    </div>

                    <div className='font-[600] text-[14px] leading-[16px] p-[12px] rounded-[8px] border-2 border-black flex justify-center items-center'>
                        Continue
                    </div>

                </div>

                <img src={gp} alt="" className='max-[800px]:block min-[800px]:hidden'/>

            </div>
        </div>
    )
}

export default SignInSection