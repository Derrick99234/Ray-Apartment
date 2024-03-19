import React from 'react'

import { Link } from 'react-router-dom'

import Navigation from '../Navigation';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutPage' },
    { name: 'Accomodations', path: '/accommodation' },
    { name: 'Destination', path: '/destination' },
    { name: 'Booking information', path: '/destination' },
    { name: 'Blog/Travel Tips', path: '/destination' },
    { name: 'Contact Us', path: '/contact us' },
    // Add more pages as needed
  ];



function Header() {
  return (
    <div className='
    h-[80px]
    w-full
    bg-[red-200]
    flex
    justify-around
    shadow-md p-6  bg-[white] rounded-md
    items-center

    '>
<Link to="ErrorPage">

<p className='
    text-[28px]
    italics
    ml-20
    text-[#1876f2]
    ' >Raysapartment</p>

</Link>
<Navigation className=" text-[#000] "  pages={pages} />

    </div>


  )
}

export default Header