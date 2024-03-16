import React from 'react'
import fb from '../assets/footerassets/fb.png'
import g from '../assets/footerassets/g.png'
import ig from '../assets/footerassets/ig.png'
import mail from '../assets/footerassets/mail.png'
import pin from '../assets/footerassets/pin.png'
import tele from '../assets/footerassets/tele.png'
import x from '../assets/footerassets/x.png'
import ytb from '../assets/footerassets/ytb.png'


function Footer() {
    return (
        <div className='w-full '>
            <div className='flex w-[80%] mx-auto justify-between py-[60px] gap-[10%] max-[1000px]:flex-col max-[1000px]:gap-[50px]  max-[1000px]:w-[90%]'>
                <div className='flex flex-col text-[14px] leading-[18px] tracking-[0.5%] gap-[16px]'>
                    <div className='font-[700]'>Hobbycue</div>

                    <div className='flex flex-col font-[400] gap-[8px]'>
                        <div>About Us</div>
                        <div>Our Services</div>
                        <div>Work with Us</div>
                        <div>FAQ</div>
                        <div>Contact Us</div>
                    </div>

                </div>

                <div className='flex flex-col text-[14px] leading-[18px] tracking-[0.5%] gap-[16px]'>
                    <div className='font-[700]'>How Do I</div>

                    <div className='flex flex-col font-[400] gap-[8px]'>
                        <div>Sign Up</div>
                        <div>Add a Listing</div>
                        <div>Claim Listing</div>
                        <div>Post a Query</div>
                        <div>Add a Blog Post</div>
                        <div>Other Queries</div>
                    </div>

                </div>

                <div className='flex flex-col text-[14px] leading-[18px] tracking-[0.5%] gap-[16px]'>
                    <div className='font-[700]'>Quick Links</div>

                    <div className='flex flex-col font-[400] gap-[8px]'>
                        <div>Listings</div>
                        <div>Blog Posts</div>
                        <div>Shop / Store</div>
                        <div>Community</div>

                    </div>

                </div>

                <div className='flex flex-col gap-[50px]'>
                    {/* top */}
                    <div className='flex flex-col gap-[16px]'>
                        <div className='font-[700] text-[14px] leading-[18px] tracking-[0.5%]'>Social Media</div>
                        <div className='flex gap-[24px] flex-wrap'>
                            <img src={fb} alt="" />
                            <img src={g} alt="" />
                            <img src={ig} alt="" />
                            <img src={mail} alt="" />
                            <img src={pin} alt="" />
                            <img src={tele} alt="" />
                            <img src={x} alt="" />
                            <img src={ytb} alt="" />
                        </div>

                    </div>


                    {/* bottom */}
                    <div className='flex flex-col gap-[16px]'>
                        <div className='font-[700] text-[14px] leading-[18px] tracking-[0.5%]'>Invite Friends</div>
                        <div className='flex relative items-center max-[450px]:hidden'>
                            <input type="text" className='w-fit h-[40px]  rounded-l-[8px] bg-[#EBEDF0]' />
                            <div className=' text-white font-[600] flex items-center justify-center bg-[#8064A2] h-full p-2 rounded-r-[8px]'>
                                <div>Invite</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer