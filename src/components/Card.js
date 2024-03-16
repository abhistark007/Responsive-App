import React from 'react'
import './Card.css'

function Card(props) {
   
  return (
    <div className={` shadow-xl group  ${props.t} bg-white hover:scale-110 gap-[24px] duration-300 flex flex-col rounded-[8px] border-[1px] border-[#CED4DA] pl-[44px] pt-[40px] pb-[40px] pr-[44px] cursor-pointer`}>
        <div className='flex gap-4'>
            <img src={props.img} alt="" />
            <p className='font-[600] text-[24px] leading-[36px]'>{props.txt}</p>
        </div>
        <div className='font-[300] text-[18px] leading-[27px]'>
            {props.desc}
        </div>
        <div className='group-hover:hidden font-[600] text-[14px] leading-[16px] mr-4 border-[#8064A2] border-[1px] rounded-[8px] w-[112px] h-[40px] text-[#8064A2] flex justify-center items-center'>
            {props.btn}
        </div>
    </div>
  )
}

export default Card