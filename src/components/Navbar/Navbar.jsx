import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import Button from "../Bottons";
import NavLinks from "./NavLinks";
import {FaBars} from 'react-icons/fa'
import Logo from '../../assets/images/rayLogo.png'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white text-[black]">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className=" w-[40vw] md:cursor-pointer h-[70px] md:w-[14vw] md:ml-[10rem] " />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <FaBars name={`${open ? "close" : "menu"}`} className="mt-[17px]" ></FaBars>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center  font-[Poppins] mx-[10rem]">
          <li>
            <Link to="/" className=" px-2 inline-block border-b-[3px] border-gray-500 font-bold hover:text-[#b98048] transition duration-1000">
              Home
            </Link>
            
          </li>
          <li>
            <Link to="/" className=" px-2 inline-block border-b-[3px] border-gray-500  mx-[20px] font-bold hover:text-[#b98048] transition duration-1000 ">
              About Us
            </Link>
            
          </li>
          {/* <NavLinks /> */}
          <Link to="/" className=" px-1 inline-block border-b-[3px] border-gray-500 font-bold hover:text-[#b98048] transition duration-1000 ">
              Accommodation
            </Link>
        </ul>
        {/* <div className="md:block hidden">
          <Button />
        </div> */}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;