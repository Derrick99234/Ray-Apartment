import React, { useState, useEffect }  from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footers/Footers';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Dan from '../../assets/images/mobile (1).png';
import Modal from '../../components/Modal/Modal';
import { FaStar } from 'react-icons/fa';
import FirstZoom from '../../assets/images/zzoom1.jpg';
import secondZoom from '../../assets/images/zzom2.avif'
import thirdZoom from '../../assets/images/zoom3.avif'
import Zoom2 from '../../components/ZoomIn/Zoom2';
import Zoom from '../../components/ZoomIn/Zoom';
import google from '../../assets/images/google-play.png'
import apple from '../../assets/images/apple-icon.png';
import Input from '../../components/Input/Input';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';



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

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Navbar/>
      <AnimatedBackground />

     
      <div className=' pb-[50px]'>
        <div className='text-center pt-[50px]'>
        <h1 className='text-[black] text-[2rem] font-bold'>Accommodation</h1>
        <h1 className='text-[black] text-[3rem] '>Unforgettable Experience</h1>
        </div>
        
        <div className='grid grid-cols justify-center gap-10 sm:flex col mt-[40px]  md:grid-cols-3 lg:grid-cols-3 '>
                <div className='w-[67vw] h-[87vh] mt-[20px] sm:w-[27vw] sm:h-[87vh] border-2 border-[#B99D75]'>
                      <Zoom  src={FirstZoom}
                      altText="Description for image 1"  class='firstZoom'
                      />
                      <div className='px-[20px]'>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS . SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>
                      </div>
                      

                  </div>

                  <div className='w-[67vw] h-[110vh] mt-[20px] sm:w-[30vw] sm:h-[105vh] border-2 border-[#B99D75]'>
                      <Zoom2  src={secondZoom}
                        altText="Description for image 1"/>
                        <div className='px-[20px]'>
                       <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                          <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                          <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                            <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>
                        </div>
                  </div>

                  <div className='w-[67vw] h-[90vh] mt-[20px] sm:w-[27vw] sm:h-[87vh] border-2 border-[#B99D75]'>
                      <Zoom  src={thirdZoom}
                      altText="Description for image 1"  
                      />
                      <div className='px-[20px]'>
                      <p className='text-[#AAAAAA] mt-[20px] hover:text-[#BAA380] transition duration-1000 font-medium ' >NEWS SIGHTSEEING</p>
                      <h2 className='text-[2rem] text-[#5A5A5A] hover:text-[#6E6F6E]' >Alpine scenery in summer</h2>
                      <p className='text-[#50524F] mt-[17px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        <br /> sociis natoque penatibus et magnis dis parturient montes, nascetur …</p>
                        </div>
                  </div>
            </div>
      </div>
      `<div className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1685814830158-e4b368134de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="text-white text-center z-10">
                  <ul className='flex col justify-center'>
                   <FaStar className='text-[#FFC107]'></FaStar>
                   <FaStar className='text-[#FFC107]'></FaStar>
                   <FaStar className='text-[#FFC107]'></FaStar>
                   <FaStar className='text-[#FFC107]'></FaStar>
                   <FaStar className='text-[#FFC107]'></FaStar>
                    
                  </ul>
                  <h1 className='text-[1rem] font-serif  sm:text-[1.2rem] font-serif pt-[20px]'>RayApartment is a game-changer in the world of hotel booking <br /> apps! Its seamless and intuitive platform made finding and booking my ideal accommodations a breeze. The comprehensive  <br />features and prioritization of user comfort ensured an effortless and satisfying experience. RayApartment is my go-to <br />choice for stress-free travel planning!</h1>
                  <h1 className="text-[18px] font-bold sm:text-[20px] ">Anonymous</h1>
                </div>
        </div>`
            <div className='grid justify-center gap-[70px] mt-[30px] mb-[70px]  sm:flex col gap-[70px]'> 
                  <div>
                        <img
                        className='h-[67vh] w-[50vw] sm:h-[82vh] sm:w-[20vw] '
                          src={Dan}
                          alt="Description of the image"
                        />
              </div>
                  <div>
                  <h1 className='text-black text-[1.5rem] w-[60vw] mt-[10px] sm:w-[40vw] sm:text-[2rem]  sm:mt-[10rem]'>Be the first to explore RayApartment's revolutionary booking app. Secure your spot on the 
                      waitlist for VIP access, early benefits and surprises. </h1>
                   <div>
             <button onClick={openModal} className='bg-[#1876F2] w-[10vw] h-[50px] rounded-md text-white font-bold  mt-[20px]' >Download</button>
                      <Modal isOpen={isModalOpen} onClose={closeModal}>
                          {/* Your modal content goes here */}

        <div>
                <h1 className='text-center text-black font-bold text[1rem]'>Join the waitlist</h1>
                <p className='text-black text-[17px] mt-[20px] '>Unlock exclusive benefits, early access, and unbeatable deals! Join our waitlist today to secure your spot and be the first to experience luxury with RayApartment. Don't miss out!</p>
            <div className='mt-[20px]'>
                <label htmlFor="" className='text-[black] font-semibold text-[1.1rem]'>Fullname</label> <Input className='text-[black] outline w-[20vw] py-[10px] bg-[#F8F8F8] outline-none border-2 border-gray-300 rounded-md pl-[10px] my-[20px]' type="text" placeholder="E.g John Doe" id="1"  />
                <label htmlFor="" className='text-[black] font-semibold text-[1.1rem]'>Email address</label><Input type="email" placeholder="E.g Johndoe@gmail.com" id="2" className='text-[black] outline-none border-2 border-gray-300 mt-[20px] rounded-md pl-[10px] w-[20vw] py-[10px] bg-[#F8F8F8]'/>
                
              <button className='text-center text-[white] w-[20vw] bg-[#1876F2] h-[50px] rounded-md mt-[30px]' onClick={togglePopUp}>Join Waitlist</button>
              <div>
                  {showPopUp && (
                    <div
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                        zIndex: '1000',
                      }}
                    >
                      <FaTimes
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '10px',
                          cursor: 'pointer',
                          color: 'black',
                        }}
                        onClick={togglePopUp}
                        size={20}/>
                      <p className='text-black pt-[10px]'>You've been successfullly  added to the waitlist</p>
                    </div>
                  )}
                </div>
              </div>
        </div>
                 </Modal>
                 <div className='flex col gap-10'>
                  <div className='flex col bg-[black] w-[30vw] h-[11vh] mt-[30px] py-[8px] rounded-md sm:w-[13vw] sm:h-[9vh]'>
                            <img src={google} alt="" className='w-[50px]' />
                            <div>
                            <p  className='font-bold text-[#6B6B6D] '>Get it on</p>
                            <h1 className='font-medium text-white text-[1.5rem] mt-[-10px]'>Google Play</h1>
                            </div>
                           
                    </div>
                    <div className='flex col bg-[black] w-[30vw] h-[11vh] mt-[30px] py-[8px] px-[3px] rounded-md sm:w-[13vw] sm:h-[9vh]'>
                            <img src={apple} alt="" className='w-[50px] bg-transparent' />
                            <div className='mt-[4px]'>
                            <p  className='font-bold text-[#6B6B6D] text-[14px] '>Download on the</p>
                            <h1 className='font-medium text-[#AAAAAA] text-[1.5rem] mt-[-10px]'>App store</h1>
                            </div>
                           
                    </div>
                </div>
              </div>
                </div>
            </div>

     
      <Footer/>
    </div>
  )
}

export default Accommodate