import { React, useState, useEffect } from "react";
import Footers from "../../components/Footers/Footers";
import Input from "../../components/Input/Input";
import "./contact.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";
// import backgroundImage from '../../assets/images/zoom4.avif';
import { FaStar } from "react-icons/fa";

function Contact() {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  useEffect(() => {
    // Change the text after 3 seconds
    const textTimeout = setTimeout(() => {
      document.getElementById("text1").classList.add("hidden");
      document.getElementById("text2").classList.remove("hidden");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(textTimeout);
  }, []);

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    <div>
      <ul className="flex col justify-center">
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
      </ul>
      <h1 className="text-[1rem] sm:text-[1.2rem] font-serif pt-[20px]">
        RayApartment is a game-changer in the world of hotel booking <br />{" "}
        apps! Its seamless and intuitive platform made finding and booking my
        ideal accommodations a breeze. The comprehensive <br />
        features and prioritization of user comfort ensured an effortless and
        satisfying experience. RayApartment is my go-to <br />
        choice for stress-free travel planning!
      </h1>
      <h1 className="text-[18px] font-bold sm:text-[20px] ">Anonymous</h1>
    </div>,
    <div>
      <ul className="flex col justify-center">
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
      </ul>
      <h1 className="text-[1rem] sm:text-[1.2rem] font-serif pt-[20px]">
        Booking my stay with Ray Apartment was a breeze! From finding <br /> the
        perfect accommodation to securing my reservation, their app made the
        entire process seamless. The attention to detail and <br /> personalized
        service exceeded my expectations. I highly recommend Ray Apartment to
        anyone looking for a hassle-free <br /> and memorable travel experience!
      </h1>
    </div>,
    <div>
      <ul className="flex col justify-center">
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
      </ul>
      <h1 className="text-[1rem]  sm:text-[1.2rem] font-serif pt-[20px]">
        Ray Apartment's hotel booking app is my go-to choice for all my travel
        <br /> needs. The app's user-friendly interface and extensive range of
        options make it easy to find the perfect accommodation for any trip.
        <br /> With seamless booking and excellent customer support, Ray
        Apartment ensures that every stay is a memorable experience.
        <br /> I wouldn't trust my travel plans to anyone else!
      </h1>
    </div>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <Navbar />

      <div
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1678132446331-da900be50e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center z-10">
          <h1 className="text-[3rem] font-bold">
            Discover Comfort at RayApartment
          </h1>
        </div>
      </div>

      <div className="bg-[#151719] grid justify-center gap-[5rem]  py-[6rem] sm:flex col ">
        <motion.div
          ref={ref}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 2 }}
          style={{ zIndex: 1 }}
        >
          <div className="text-center border-2 border-[#B99D75] px-[50px] py-[5rem]  ">
            <h3 className="text-[#998364] mt-[40px]">HAVE ANY QUESTIONS?</h3>
            <h1 className="text-[white] text-[2rem] mt-[20px] font-normal">
              Let's start a conversation
            </h1>
            <p className="text-[#AAABAB] mt-[30px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing
              <br /> elit. Aenean commodo ligula eget dolor.{" "}
            </p>
            <div class="myInput">
              <Input type="email" placeholder="Your Name" id="1" />
              <Input type="password" placeholder="Your Email" id="2" />
              <Input
                class="thirdInput"
                type="text"
                placeholder="Your Message"
                id="2"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 3 }}
          style={{ zIndex: 1 }}
        >
          <div
            className="relative w-[90vw] flex items-center justify-center bg-cover bg-center sm:w-[50vw] h-[87vh]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </motion.div>
      </div>

      <div>
        <button onClick={togglePopUp}>Open Pop-up</button>

        {showPopUp && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              zIndex: "1000",
            }}
          >
            <FaTimes
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={togglePopUp}
              size={20}
            />
            <p>This is a simple pop-up!</p>
            <button onClick={togglePopUp}>Close</button>
          </div>
        )}
      </div>
      <div
        className="fixed w-full h-full bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1678132446331-da900be50e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full text-blacktext-2xl opacity-0 animate-fade-in-delay">
        <span id="text1">Your Initial Text</span>
        <span id="text2" className="hidden">
          Your New Text
        </span>
      </div>
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1570737209810-87a8e7245f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {texts[textIndex]}
      </div>
      <Footers />
    </div>
  );
}

export default Contact;
