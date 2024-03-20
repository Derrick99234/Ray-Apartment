import React from "react";

function Button() {
  return (
    <div
      className="w-[120px]
    h-[40px]
    rounded-[10px]
    bg-[#1876f2]
    text-[#fff] 
    text-[10px]
    font-bold 
    uppercase
    flex
    justify-center
    items-center
    tracking-widest
    cursor-pointer
    italics
    mt-[10px]

    sm:w-[150px]
    md:px-[30px]
    [@media(max-width:400px)]:w-[103px]
    [@media(max-width:355px)]:h-[30px]
    [@media(max-width:355px)]:text-[11px]
    [@media(max-width:355px)]:mt-[10px]

    
    "
    >
      {" "}
      Subscribe
    </div>
  );
}

export default Button;
