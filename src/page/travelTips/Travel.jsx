import React from 'react'
import Footers from '../../components/Footers/Footers'
import Zoom from '../../components/ZoomIn/Zoom';
import FirstZoom from '../../assets/images/zoom1 pic.avif';
import secondZoom from '../../assets/images/zzom2.avif'
import thirdZoom from '../../assets/images/zoom3.avif'
import fourthZoom from '../../assets/images/zoom4.avif'
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
            <div className='grid grid-cols justify-center gap-10 sm:flex col  md:grid-cols-3 lg:grid-cols-3 '>
                <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw] '>
                      <Zoom  src={FirstZoom}
                      altText="Description for image 1"  class='firstZoom'
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS . SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw]'>
                      <Zoom2  src={secondZoom}
                        altText="Description for image 1"/>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw]'>
                      <Zoom  src={thirdZoom}
                      altText="Description for image 1"  
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>
            </div>
            <div className='grid grid-cols justify-center gap-10 sm:flex col  md:grid-cols-3 lg:grid-cols-3 '>
                <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw] mt-[-6rem]'>
                      <Zoom  src={fourthZoom}
                      altText="Description for image 1"  class='firstZoom'
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS . SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw]'>
                      <Zoom2  src={secondZoom}
                        altText="Description for image 1"/>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>

                  <div className='w-[74vw] h-[30] mt-[20px] sm:w-[30vw] mt-[-6rem]'>
                      <Zoom  src={thirdZoom}
                      altText="Description for image 1"  
                      />
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>

                  </div>
            </div>
        </div>


      <div className='mt-[40px] font-serif'>
      <h1 className='text-center text-[black] text-[3rem] font-bold'>Contact Us</h1>
          <div className='bg-[#151719] grid justify-center gap-[5rem]  py-[6rem] sm:flex col '>
                <div className='text-center border-2 border-[#B99D75] px-[50px] py-[5rem]  sm: px-[50px] '>
                      <h3 className='text-[#998364] mt-[40px]'>HAVE ANY QUESTIONS?</h3>
                      <h1 className='text-[white] text-[2rem] mt-[20px] font-normal'>Let's start a conversation</h1>
                      <p className='text-[#AAABAB] mt-[30px]'> Lorem ipsum dolor sit amet, consectetuer adipiscing
                        <br /> elit. Aenean commodo ligula eget dolor. </p>
                    <div class='myInput'  >
                        <Input type="email" placeholder="Your Name" id="1"  />
                        <Input type="password" placeholder="Your Email" id="2"/> 
                        <Input class='thirdInput' type="text" placeholder="Your Message" id="2"/> 
                    </div>
                </div>
                <div className="relative w-[90vw] h-[82vh] flex items-center justify-center bg-cover bg-center sm:w-[50vw] h-[87vh]" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                </div>
          </div>
      </div>

      
      <div className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1685814830158-e4b368134de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="text-white text-center z-10">
                  <h1 className='text-[2rem] font-serif'>Spend Your Time With Us</h1>
                  <p className="mt-2">Everything at CozyStay, in its restaurants, bar and spa is designed to make your stay, lunch or dinner unforgettable.</p>
                  <h1 className="text-[20px] font-bold">Tel: +1 212-555-6688</h1>
                  <h3>Email: reservation@cozystay.com</h3>
                </div>
        </div>

        <Footers/>
    </div>
  )
}

export default Travel