import React from 'react'
import {  FaFacebook , FaTimes , FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Button from '../Button/Button';

function Footers() {
  return (
    <div className='grid lg:flex lg:justify-center p-20 lg:gap-10 bg-[#000] justify-center p-20  md:grid-cols-2'>
{/* #0A1121 */}
        <div className='mr-10'>
            <p className='text-[#fff]  '>RaysApartment</p>

            <select name="" id="" className='
            text-white
            bg-transparent
            outline
            rounded-md
            pr-20
            pl-6
            pt-2
            pb-2
            mt-10
            ' >
                <option value="" >Manchester</option>
                <option value="">Hertfordshire</option>
                <option value="">Sunderland</option>
                <option value="">Glasglow</option>
                <option value="">Bermingham</option>
                <option value="">London</option>
            </select>

            <ul className='text-white
            text-[16px]
            mt-7 border-b border-gray-500 pb-[25px]
            '>
                <li>Company</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Investor Relations</li>
                <li>Mobile Apps</li>
                <li>Rays Apartment Studio</li>
                <li>Affliate</li>
            </ul>
        </div>

        <div className='text-white
            text-[16px]
            mt-[25px] sm:mt-[99px]
            
            '>
            <ul>
                <li>Help</li>
                <li>Learn how Ray Apartment works</li>
                <li>Terms and Condition</li>
                <li>Legal Information</li>
                <li>Cookie preferences</li>
                <li>Privacy Notice</li>
                <li>Cyber Security</li>
                <li>MSA Statement</li>
            </ul>
        </div>
        


        <div className='text-white mt-[4rem] ml-[0]   sm:ml-[30px] md:ml-[0]'>
                <div className='flex ml-0 mb-[10px] lg:ml-[30rem] gap-2 md:ml-[0] '>
                <i><FaFacebook  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaTimes size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaInstagram  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaYoutube  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaLinkedin  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                 
                </div>
                

            <h2 className='text-[19px] font-bold mt-[40px] sm:text-[24px] w-full sm:w-[37rem]'>Get exclusive inspiration for your next stay –  subscribe to our newsletter.</h2>
       <div className='flex col'>
            <input  type="text"
            className='
            pb-2
            pr-20
            bg-transparent
            border-b-2 border-solid border-[#007CC2]
            text-[#000]
            mt-4
            font-bold
            
            sm:pr-40
            '
            placeholder='Email Address  '/>  
            <Button/>
            </div> 
            <p className=' font-bold text-[14px] mt-5'>trivago N.V., <span className='font-normal text-[#AFB3BC]'>Kesselstraße 5 – 7, 40221 Düsseldorf, London</span> </p>
            <p className='font-normal text-[#AFB3BC]' >Copyright 2024 RayApartment | All rights reserved.</p>
        </div>

        <style jsx>{`
        @media screen and (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Footers