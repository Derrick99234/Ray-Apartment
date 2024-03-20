import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footers/Footers";
import Animated2 from "../../components/AnimatedBackground/Animated2";
import Dan from "../../assets/images/mobile (1).png";
import Modal from "../../components/Modal/Modal";
import { FaStar } from "react-icons/fa";
import eightZoom from "../../assets/images/eigthzoom.avif";
import secondZoom from "../../assets/images/zzom2.avif";
import thirdZoom from "../../assets/images/zoom3.avif";
import Zoom2 from "../../components/ZoomIn/Zoom2";
import Zoom from "../../components/ZoomIn/Zoom";
import google from "../../assets/images/google-play.png";
import apple from "../../assets/images/apple-icon.png";
import Input from "../../components/Input/Input";
// import { motion } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
// import backgroundImage from '../../assets/images/zoom4.avif';

function Accommodate() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Only trigger once
  // });

  // const handleClick = () => {
  //   alert('Button clicked!');
  // };
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
      <h1 className="text-[1rem]  sm:text-[1.2rem] font-serif pt-[20px]">
        RayApartment is a game-changer in the world of hotel booking <br />{" "}
        apps! Its seamless and intuitive platform made finding and booking my
        ideal accommodations a breeze. The comprehensive <br />
        features and prioritization of user comfort ensured an effortless and
        satisfying experience. RayApartment is my go-to <br />
        choice for stress-free travel planning!
      </h1>
      <h1 className="text-[18px] font-bold sm:text-[20px]text-[#000] ">
        Anonymous
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
      <h1 className="text-[1rem] sm:text-[1.2rem] font-serif pt-[20px]">
        Booking my stay with Ray Apartment was a breeze! From finding <br /> the
        perfect accommodation to securing my reservation, their app made the
        entire process seamless. The attention to detail and <br /> personalized
        service exceeded my expectations. I highly recommend Ray Apartment to
        anyone looking for a hassle-free <br /> and memorable travel experience!
      </h1>
      <h1 className="text-[18px] font-bold sm:text-[20px]">Joy Adams</h1>
    </div>,
    <div>
      <ul className="flex col justify-center">
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
        <FaStar className="text-[#FFC107]"></FaStar>
      </ul>
      <h1 className="text-[1rem] sm:text-[1.2rem] font-serif pt-[20px] ">
        Ray Apartment's hotel booking app is my go-to choice for all my travel
        <br /> needs. The app's user-friendly interface and extensive range of
        options make it easy to find the perfect accommodation for any trip.
        <br /> With seamless booking and excellent customer support, Ray
        Apartment ensures that every stay is a memorable experience.
        <br /> I wouldn't trust my travel plans to anyone else!
      </h1>
      <h1 className="text-[18px] font-bold sm:text-[20px]text-[#000] ">
        Daniel Smith
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
      <Animated2 />

      <div className=" pb-[50px]">
        <div className="text-center pt-[50px]">
          <h1 className="text-[black] text-[2rem] font-bold">Accommodation</h1>
          <h1 className="text-[black] text-[3rem] ">
            Unforgettable Experience
          </h1>
        </div>

        <div className="grid grid-cols justify-center gap-10 pl-[15%] sm:grid grid-cols sm:pl-[15%] mt-[40px]  md:grid-cols md:pl-[0]  xl:flex col xl:pl-[0] ">
          <div
            className="w-[70vw] mb-10
                 mt-[20px] sm:w-[67vw] border-2 border-[#B99D75]  lg:w-[50vw] xl:w-[45vw] h-max pb-10"
          >
            <Zoom
              src={eightZoom}
              altText="Description for image 1"
              class="firstZoom"
            />
            <div className="px-[20px]">
              <p className="text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ">
                RAYAPARTMENT'S EXPLORER'S HUB
              </p>
              <h2 className="text-[2rem] text-[#5A5A5A] [@media(max-width:420px)]:text-[1.2rem]  hover:text-[#6E6F6E]">
                24/7 Customer Support:
              </h2>
              <p className="text-[#50524F] mt-[17px]">
                At Ray Apartment, we offer 24/7 customer support, ensuring
                assistance is available whenever you need it. Our dedicated team
                is here to help with bookings, inquiries, and any support
                services you may require. Enjoy peace of mind knowing that help
                is just a phone call or message away at Ray Apartment.
              </p>
            </div>
          </div>

          <div className="w-[72vw] mb-10 pb-10  mt-[20px] sm:w-[67vw] border-2 border-[#B99D75] lg:w-[50vw] xl:w-[45vw] h-max">
            <Zoom2 src={secondZoom} altText="Description for image 1" />
            <div className="px-[20px]">
              <p className="text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ">
                RAYAPARTMENT'S EXPLORER'S HUB
              </p>
              <h2 className="text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E] [@media(max-width:420px)]:text-[1.2rem]">
                Detailed Listings
              </h2>
              <p className="text-[#50524F] mt-[17px]">
                Each accommodation listing on Ray Apartment provides detailed
                information, including amenities, location details, photos, and
                reviews, helping users make informed booking decisions.
              </p>
            </div>
          </div>

          <div
            className="w-[70vw] h-max pb-10
                   mt-[20px] sm:w-[67vw] mb-10 border-2 border-[#B99D75] lg:w-[50vw] xl:w-[45vw] "
          >
            <Zoom src={thirdZoom} altText="Description" />
            <div className="px-[20px]">
              <p className="text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ">
                RAYAPARTMENT'S EXPLORER'S HUB
              </p>
              <h2 className="text-[2rem] text-[#5A5A5A] hover:text-[#B19885] transition duration-1000 [@media(max-width:420px)]:text-[1.2rem]">
                Instant Booking
              </h2>
              <p className="text-[#50524F] mt-[17px]">
                Ray Apartment offers instant booking services, enabling users to
                swiftly reserve accommodations hassle-free. With real-time
                availability and flexibl e cancellation policies, travelers can
                secure their stay effortlessly. Our secure payment gateway
                ensures peace of mind during the booking process
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1570737209810-87a8e7245f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {texts[textIndex]}
      </div>
      <div className="grid justify-center sm:flex sm:gap-[0] sm:justify-center mt-[80px]">
        <div>
          <img
            className="w-1/2 h-auto max-w-full ml-[15%] 
                 
                  sm:w-[33vw] sm:h-[70vh] xl:h-[82vh] xl:w-[20vw] 
                  md:w-[30vw] md:h-[75vh] lg:w-[26vw] lg:h-[86vh] "
            src={Dan}
            alt="Description"
          />
        </div>

        <div className="mt-[40px] ml-[4%] sm:mt-[9rem] md:mt-[60px]">
          <h1
            className="text-black text-[1.5rem] ml-[40px]  w-[60vw] mt-[0]  max-[480px]:text-[17px]
                sm:text-[1rem] sm:w-[40vw] xl:w-[40vw] xl:text-[2rem] xl:mt-[10rem]
                 md:text-[1.2rem] md:w-[35vw] "
          >
            Be the first to explore RayApartment's revolutionary booking app.
            Secure your spot on the waitlist for VIP access, early benefits and
            surprises.{" "}
          </h1>
          <div>
            <button
              onClick={openModal}
              className="w-[30vw] 
                h-[40px]
                bg-[#1876F2]
                text-[white] 
                text-[1rem] 
                rounded-md 
                font-bold 
                ml-[50px] 
                mt-[20px]
                sm:w-[20vw]
                lg:w-[10vw]
                md:w-[15vw]
              
                "
            >
              Download
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div>
                <h1 className="text-center text-black font-bold text[1rem]">
                  Join the waitlist
                </h1>
                <p className="text-black text-[17px] mt-[20px] ">
                  Unlock exclusive benefits, early access, and unbeatable deals!
                  Join our waitlist today to secure your spot and be the first
                  to experience luxury with RayApartment. Don't miss out!
                </p>
                <div className="mt-[20px]">
                  <label
                    htmlFor=""
                    className="text-[black] font-semibold text-[1.1rem]"
                  >
                    Fullname
                  </label>{" "}
                  <Input
                    className="text-[black] outline w-[20vw] py-[10px] bg-[#F8F8F8] outline-none border-2 border-gray-300 rounded-md pl-[10px] my-[20px]"
                    type="text"
                    placeholder="E.g John Doe"
                    id="1"
                  />
                  <label
                    htmlFor=""
                    className="text-[black] font-semibold text-[1.1rem]"
                  >
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="E.g Johndoe@gmail.com"
                    id="2"
                    className="text-[black] outline-none border-2 border-gray-300 mt-[20px] rounded-md pl-[10px] w-[20vw] py-[10px] bg-[#F8F8F8]"
                  />
                  <button
                    className="text-center text-[white] w-[20vw] bg-[#1876F2] h-[50px] rounded-md mt-[30px]"
                    onClick={togglePopUp}
                  >
                    Join Waitlist
                  </button>
                  <div>
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
                            top: "5px",
                            right: "10px",
                            cursor: "pointer",
                            color: "black",
                          }}
                          onClick={togglePopUp}
                          size={20}
                        />
                        <p className="text-black pt-[10px]">
                          You've been successfully added to the waitlist
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Modal>
            <div className="flex col gap-5 ml-[20px] lg:ml-[40px] sm:ml-[40px] md:ml-[40px] xl:ml-[40px]">
              <div
                className="flex col bg-[black] w-[32vw] h-[12vh] mt-[30px] py-[8px] rounded 
                  
                  sm:w-[24vw] sm:h-[11vh]
                  xl:w-[13vw] xl:h-[9vh] md:w-[20vw] md:h-[8vh] 
                  lg:w-[15vw] lg:h-[10.5vh]   [@media(max-width:500px)]:w-[43vw]
                  [@media(max-width:430px)]:h-[9.5vh]
                  [@media(max-width:415px)]:w-[1vw]"
              >
                <img
                  src={google}
                  alt=""
                  className="w-[45px] xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px] "
                />
                <div className="mt-[4px]">
                  <p className="font-bold text-[#6B6B6D] text-[10px]sm:text-[13px] lg:text-[18px] md:text-[11px]">
                    Get it on
                  </p>
                  <h1 className="font-medium text-white text-[1.1rem] mt-[-10px] sm:text-[1.2rem] xl:text-[1.5rem] md:text-[1.2rem]">
                    Google Play
                  </h1>
                </div>
              </div>

              <div
                className="flex col bg-[black] w-[32vw] h-[11.5vh] mt-[30px] py-[10px] px-[3px] rounded-md
                     sm:w-[25vw] xl:w-[13vw] xl:h-[9vh] 
                     md:w-[20vw] md:h-[8vh]
                      lg:w-[15vw] lg:h-[10vh] 
                      [@media(max-width:530px)]:w-[35vw]  [@media(max-width:530px)]:px-[0px]
                      [@media(max-width:430px)]:h-[9.5vh] [@media(max-width:430px)]:w-[30vw]
                      [@media(min-width:1100px)]:w-[16vw]
                      "
              >
                <img
                  src={apple}
                  alt=""
                  className="w-[45px] h-[45px] pt-[2px] bg-transparent xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px] "
                />
                <div className="mt-[4px] lg:pt-[5px]">
                  <p
                    className="font-bold text-[#6B6B6D] text-[12px] 
                            [@media(max-width:430px)]:text-[10px]
                            sm:text-[13px] xl:text-[14px] md:text-[11px]"
                  >
                    Download on the
                  </p>
                  <h1
                    className="font-medium text-[#AAAAAA] text-[1.2rem]
                            [@media(max-width:430px)]:text-[1rem] pt-[5px]
                            mt-[-10px] sm:text-[1.2rem] xl:text-[1.5rem] xl:mt-[-10px] md:text-[1.2rem]"
                  >
                    App store
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center mt-[30px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1685814830158-e4b368134de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="text-white text-center z-10">
          <h1 className="text-[2rem] font-serif">
            Discover Comfort at RayApartment
          </h1>
          <p className="mt-2">
            Indulge in luxury living, tailored services, and unique experiences
            for an unforgettable stay.
          </p>
          <h1 className="text-[18px] font-bold sm:text-[20px] ">
            Tel: +44 777-811-2713
          </h1>
          <h3>Email: inforoyalhomes2024@gmail.com</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accommodate;
