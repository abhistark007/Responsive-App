import React from 'react'
import Add from '../assets/addyoursectionassets/Add.png'

function AddYourOwnSection() {
  return (
    <div className='bg-[#F7FDFF] w-full p-[100px] max-[600px]:p-0'>
        <div className='bg-white flex flex-col w-[80%] mx-auto gap-6 p-5'>

            <div className='flex gap-5'>
                <img src={Add} alt="" />
                <div className='font-[600] text-[24px] leading-[36px]'>Add your own</div>
            </div>

            <div className='font-[300] text-[18px] leading-[30px] tracking-[2%]'>
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
            </div>

            <div className='font-[600] text-[14px] leading-[16px] mr-4 border-[#8064A2] border-[1px] rounded-[8px] w-[112px] h-[40px] text-[#8064A2] flex justify-center items-center'>
            Add new
            </div>

        </div>
    </div>
  )
}

export default AddYourOwnSection