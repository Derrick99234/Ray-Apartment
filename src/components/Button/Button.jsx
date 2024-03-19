import React from 'react'

function Button() {
  return (
    <button type="submit" className='w-[120px]
    h-[40px]
    rounded-[10px]
    bg-[#1876f2]
    text-[#fff] 
    font-bold 
    uppercase
    flex
    justify-center
    items-center
    tracking-widest
    cursor-pointer
    italics
    mt-[10px]

    sm:w-[150px] text-[13px]
    md:px-[30px][@media(max-width:355px)]:w-[70px]
     [@media(max-width:355px)]:h-[30px] [@media(max-width:355px)]:text-[9px] [@media(max-width:355px)]:mt-[10px]
    ' > Subscribe</button>
  )
}

export default Button