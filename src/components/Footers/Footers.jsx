import React,{useState} from "react";
import {
  FaFacebook,
  FaTimes,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Button from "../Button/Button";

function Footers() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formkeep.com/f/b3643d5e1a24", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
       
        setFormData({email: "",});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="grid 
    xl:flex xl:justify-center p-20 xl:gap-10 bg-[#000] justify-center p-20  md:grid-cols-2 lg:flex col lg:justify-around"
    >
      {/* #0A1121 */}
      <div className="mr-10  max-[480px]:mr-[0]">
        <p className="text-[#fff]" >RaysApartment</p>

        <select
          name=""
          id=""
          className="
            text-white
            bg-black
            outline
            rounded-md
            pr-20
            pl-6
            pt-2
            pb-2
            mt-10
            lg:pr-10
            "
        >
          <option value="">Manchester</option>
          <option value="">Hertfordshire</option>
          <option value="">Sunderland</option>
          <option value="">Glasgow</option>
          <option value="">Bermingham</option>
          <option value="">London</option>
        </select>

        <ul
          className="text-white
            text-[16px]
            mt-7 border-b border-gray-500 pb-[25px]
            max-[480px]:text-[13px]
            "
        >
          <li>About</li>
          <li>Careers</li>
          <li>News</li>
          <li>Investors</li>
          <li>Apps</li>
          <li>Studios</li>
          <li>Partners</li>
        </ul>
      </div>

      <div
        className="text-white
            text-[16px]
            mt-[25px]
            max-[480px]:text-[13px] 
            
            sm:mt-[99px]
                   
            "
      >
        <ul>
          <li>Help</li>
          <li>Learn how Ray Apartment works</li>
          <li>Terms and Condition</li>
          <li>Privacy Notice</li>
          <li>Cyber Safety</li>
          <li>Service Agreement</li>
        </ul>
      </div>

      <div className="text-white mt-[4rem] ml-[0]   xl:ml-[30px] md:ml-[0]">
        <div className="flex ml-0 mb-[10px] xl:ml-[30rem] gap-2 md:ml-[0] ">
          <i>
            <FaFacebook
              size={28}
              color="#000"
              className="bg-[#fff]   rounded-3xl p-2 "
            />{" "}
          </i>
          <i>
            <FaTimes
              size={28}
              color="#000"
              className="bg-[#fff]   rounded-3xl p-2 "
            />{" "}
          </i>
          <i>
            <FaInstagram
              size={28}
              color="#000"
              className="bg-[#fff]   rounded-3xl p-2 "
            />{" "}
          </i>
          <i>
            <FaYoutube
              size={28}
              color="#000"
              className="bg-[#fff]   rounded-3xl p-2 "
            />{" "}
          </i>
          <i>
            <FaLinkedin
              size={28}
              color="#000"
              className="bg-[#fff]   rounded-3xl p-2 "
            />{" "}
          </i>
        </div>

        <h2
          className="text-[19px] font-bold mt-[40px] 
            max-[480px]:text-[14px]
            xl:text-[24px] w-full xl:w-[37rem] lg:w-[17rem]"
        >
          Get exclusive inspiration for your next stay – subscribe to our
          newsletter.
        </h2>
        <form className="flex col" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="
            pb-2
            pr-20
            bg-transparent
            border-b-2 border-solid border-[#007CC2]
            text-[#fff]
            mt-4
            font-bold
            max-[480px]:pr-6
            sm:pr-40
            lg:pr-7
            xl:pr-40
            [@media(max-width:355px)]:pr-3
            "
          />
          <Button />
        </form>
        <p className=" font-bold text-[14px] mt-5">
          RayApartment.,{" "}
          <span className="font-normal text-[#AFB3BC]">
            Email: inforoyalhomes2024@gmail.com
          </span>{" "}
        </p>
        <p className="font-normal text-[#AFB3BC]">
          Copyright 2024 RayApartment | All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @media screen and (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Footers;
