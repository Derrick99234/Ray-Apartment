import React from 'react'
import Footers from '../../components/Footers/Footers'
import Zoom from '../../components/ZoomIn/Zoom';
import FirstZoom from '../../assets/images/zoom1 pic.avif';
import secondZoom from '../../assets/images/zzom2.avif'
import thirdZoom from '../../assets/images/zoom3.avif'

import fifthZoom from '../../assets/images/fifthzoom.avif'
import sixthZoom from '../../assets/images/sixthzoom.avif'
import seventhZoom from '../../assets/images/seventhzoom.avif'
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Zoom2 from '../../components/ZoomIn/Zoom2'


function Travel() {
  return (
    <div>
      <Navbar/>
            {/* <div className="relative h-[85vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://libertatravel.hr/wp-content/uploads/2023/05/Grape-harvest.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-white text-center z-10">
                  <p className="mt-2">THE LATEST NEWS AND BLOG</p>
                    <h1 className="text-[5rem] font-bold">About Us</h1>
                  
                </div>
            </div> */}

            <AnimatedBackground />
        <div> 
            <h1 className='text-[black] text-[3rem] text-center font-bold mt-[20px] font-serif sm:text-[4rem]'>Our Blog</h1>
            <div className='grid grid-cols justify-center pl-[14%] gap-10 xl:flex col xl:pl-[0]  md:grid grid-cols lg:grid grid cols lg:pl-[0] '>
                <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:w-[50vw] xl:w-[42vw]'>
                      <Zoom  src={FirstZoom}
                      altText="Description for image 1"  class='firstZoom'
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >RAYAPARTMENT'S EXPLORER'S HUB</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#B19885] transition duration-1000' >Instant Booking</h2>
                      <p className='text-[#50524F] mt-[17px]'>Ray Apartment offers instant booking services, enabling users to swiftly reserve accommodations hassle-free. With real-time availability and flexibl
                      e cancellation policies, travelers can secure their stay effortlessly. Our secure payment gateway ensures peace of mind during the booking process</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:w-[50vw]'>
                      <Zoom2  src={secondZoom}
                        altText="Description for image 1"/>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >RAYAPARTMENT'S EXPLORER'S HUB</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Personalized Recommendations:</h2>
                      <p className='text-[#50524F] mt-[17px]'> With advanced algorithms and user preferences, Ray Apartment offers personalized
                       accommodation recommendations tailored to individual needs and preferences.</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:w-[50vw] xl:w-[42vw]'>
                      <Zoom  src={thirdZoom}
                      altText="Description for image 1"  
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >RAYAPARTMENT'S EXPLORER'S HUB</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Business Travel Solutions</h2>
                      <p className='text-[#50524F] mt-[17px]'>Ray Apartment specializes in meeting the unique needs of business travelers. From seamless corporate bookings to cutting-edge meeting facilities, we ensure a productive and comfortable stay. Enjoy executive amenities and personalized service tailored to elevate your business travel experience.</p>

                  </div>
            </div>
            <div className='grid grid-cols justify-center gap-10 pl-[14%] xl:flex col xl:pl-[0]  md:grid-cols lg:grid-cols lg:pl-[0]'>
                <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:mt-[-5rem] lg:w-[50vw] xl:w-[42vw]'>
                      <Zoom  src={fifthZoom}
                      altText="Description for image 1"  class='firstZoom'
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >RAYAPARTMENT'S EXPLORER'S HUB</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]'>Green Initiatives</h2>
                      <p className='text-[#50524F] mt-[17px]'>Ray Apartment prioritizes sustainability, providing eco-friendly accommodation options for conscientious travelers. Our commitment to the environment ensures guests can enjoy a greener stay while reducing their carbon footprint. Experience responsible hospitality with our eco-conscious initiatives at Ray Apartment.</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:w-[50vw]'>
                      <Zoom2  src={sixthZoom}
                        altText="Description for image 1"/>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >RAYAPARTMENT'S EXPLORER'S HUB</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]'>Detailed Listings</h2>
                      <p className='text-[#50524F] mt-[17px]'>Each accommodation listing on Ray Apartment provides detailed information, including amenities, location details, photos, and reviews, helping users make informed booking decisions.</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[67vw] lg:mt-[-5rem] lg:w-[50vw] xl:w-[42vw]'>
                      <Zoom  src={seventhZoom}
                      altText="Description for image 1"  
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >24/7 Customer Support:</h2>
                      <p className='text-[#50524F] mt-[17px]'>At Ray Apartment, we offer 24/7 customer support, ensuring assistance is available whenever you need it. Our dedicated team is here to help with bookings, inquiries, and any support services you may require. Enjoy peace of mind knowing that help is just a phone call or message away at Ray Apartment.</p>

                  </div>
            </div>
        </div>


      <div className='mt-[40px] font-serif'>
      <h1 className='text-center text-[black] text-[3rem] font-bold'>Contact Us</h1>
          <div className='bg-[#151719] grid justify-center gap-[5rem]  py-[6rem] sm:grid xl:flex col'>
                <div className='text-center border-2 border-[#B99D75] mx-[40px]  px-[40px] py-[5rem] 
                [@media(max-width:400px)]:px-[10px]
                [@media(max-width:400px)]:py-[20px]
                 sm:px-[50px] sm:mx-[40px] xl:px-[50px] xl:mx-[40px]'>
                      <h3 className='text-[#998364] mt-[40px]'>HAVE ANY QUESTIONS?</h3>
                      <h1 className='text-[white] text-[1.7rem] mt-[20px] font-normal sm:text-[2rem] xl:text-[2rem]'>Let's start a conversation</h1>
                      <p className='text-[#AAABAB] mt-[30px]'> Affirmative! Let's kick off a dialogue </p>
                    <div class='myInput'  >
                        <Input type="email" placeholder="Your Name" id="1"  />
                        <Input type="password" placeholder="Your Email" id="2"/> 
                        <Input class='thirdInput' type="text" placeholder="Your Message" id="2"/> 
                    </div>
                </div>
                <div className="relative w-[90vw] h-[82vh] ml-[6%] flex items-center justify-center bg-cover bg-
                [@media(max-width:330px)]:ml-[9%]
                sm:w-[80vw] sm:h-[87vh] xl:w-[50vw] xl:ml-[0]" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                </div>
          </div>
      </div>

      
      <div className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="text-white text-center z-10">
                  <h1 className='text-[2rem] font-serif'>Discover Comfort at RayApartment</h1>
                  <p className="mt-2">Indulge in luxury living, tailored services, and unique experiences for an unforgettable stay.</p>
                  <h1 className="text-[18px] font-bold sm:text-[20px] ">Tel: +44 777-811-2713</h1>
                  <h3>Email: inforoyalhomes2024@gmail.com</h3>
                </div>
        </div>

        <Footers/>
    </div>
  )
}

export default Travel