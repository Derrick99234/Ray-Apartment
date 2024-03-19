import React, { useState } from 'react';
import Footers from '../../components/Footers/Footers'
import Sliders from '../../components/Sliders/Sliders';
import News from '../../components/Newslide/News'
import Navbar from '../../components/Navbar/Navbar';
import { BiCheck } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { IoIosOptions } from 'react-icons/io';
import Dan from '../../assets/images/mobile (1).png';
import Modal from '../../components/Modal/Modal'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';
import Input from '../../components/Input/Input';
import google from '../../assets/images/google-play.png'
import apple from '../../assets/images/apple-icon.png';

const customSlides = [
  {
    url: 'https://images.unsplash.com/photo-1678132446331-da900be50e27?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-stunning-3d-render-captivating-hotel-room-in-bedroom-interior-image_13515814.png',
  }
];


const firstSlides = [
  {
    url: 'https://images.unsplash.com/photo-1552900096-5d526c911707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  },
  {
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  },

];








    
 

function Home()  {

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


  return (
    <div> 
        <Navbar/>
        <News slides={customSlides}  >
          <div className="text-white ">
            <p>BEST PLACE FOR RELAX</p>
            <h1>Perfect Countryside Vacation at CozyStay Lodge</h1>
          </div>
        </News>
        <div className='grid ml-[50px] justify-center lg:flex col gap-10 justify-center mt-[40px] md:grid '>
        <motion.div
                         ref={ref}
                         initial={{ y: 250, opacity: 0 }}
                         animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                         transition={{
                           duration: 4,
                           type: 'spring', // Use spring for a bouncy effect
                           bounce: 0.8, // Adjust bounce value as needed
                         }}
                         style={{ zIndex: 1 }}>
          <div className='md:ml-[15px]'>
              <FaHeart size={24} color="#FF6B6B" className='bg-[#AAAAAA] rounded-xl w-[40px] h-[40px] p-[8px] ' />
            <h1 className='text-[1.3rem] text-[black] font-bold font-mono md:text-[1.7rem] lg:text-[1.4rem]'>Personalized Experiences</h1>
            <p className='sm:w-[70vw] text-[black] md:w-[80vw] md:text-[1.5rem] lg:w-[25vw] lg:text-[1.2rem] '>RayApartment tailors stays to individual preferences, ensuring a unique and personalized travel experience for each user.</p>
          </div>
          </motion.div>
          <motion.div
                ref={ref}
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                transition={{
                  duration: 4,
                  type: 'spring', // Use spring for a bouncy effect
                  bounce: 0.8, // Adjust bounce value as needed
                }}
                style={{ zIndex: 1 }}>
            <div className='md:ml-[15px]'>
              <BiCheck size={30} color="#fff" className='bg-[green] rounded-xl' />
              <h1 className='text-[1.3rem] text-[black] font-bold font-mono md:text-[1.5rem] lg:text-[1.4rem]'>Seamless Booking</h1>
              <p className='sm:w-[70vw] text-[black] lg:w-[25vw] lg:text-[1.2rem] md:w-[80vw] md:text-[1.4rem]'>RayApartment prioritizes user convenience with an intuitive and hassle-free booking process, making it easy for travelers to secure their ideal accommodations..</p>
            </div>
          </motion.div>
          <motion.div
                  ref={ref}
                  initial={{ y: 250, opacity: 0 }}
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{ duration: 4}}
                  style={{ zIndex: 1 }}>
          <div className='md:ml-[15px]'>
             <IoIosOptions size={25} color="#000"  className='bg-[plum] rounded-xl w-[40px] h-[40px] p-[7px]'/>
            <h1 className='sm:text-[1.3rem] text-[black] font-bold font-mono lg:text-[1.4rem] md:text-[1.5rem]'>Comprehensive Features</h1>
            <p className='sm:w-[70vw] text-[black] lg:w-[25vw] lg:text-[1.2rem] md:w-[80vw] md:text-[1.4rem]'>RayApartment tailors stays to individual preferences, ensuring a unique and personalized travel experience for each user.</p>
          </div>
          </motion.div>
        </div>
        {/* E443b417 */}
        <motion.div
                  ref={ref}
                  initial={{ y: 250, opacity: 0 }}
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{
                    duration: 4,
                    type: 'spring', // Use spring for a bouncy effect
                    bounce: 0.8, // Adjust bounce value as needed
                  }}
                  style={{ zIndex: 1 }}>
        <div className='text-center mt-[10rem]' >
          <h3 className='text-[#52624E] uppercase font-bold text-[1.5rem] font-serif'>Welcome to RaysApartment</h3>
          <h1 className=' text-[1.5rem] text-[black] mt-[10px] w-full lg:w-full lg:text-[3rem] md:text-[2rem]'>RayApartment offers extraordinary accommodations, personalized 
         <br /> services, and the promise of unforgettable 
        <br /> holiday experiences.</h1>
            <p className='text-[#8E908E] mt-[30px] mb-[30px] text-[13px] w-full lg:w-full lg:text-[20px] md:text-[18px]'>RayApartment offers exceptional lodgings, a blend of harmonious hotels and chalets. Each room 
           <br /> boasts unique decor, Victorian furniture, and luxurious amenities. Our authentic hospitality invites you to stay,
           <br /> indulge, and relish the best in comfortable accommodations at RayApartment.</p>
        </div>
        </motion.div>
        
      
      <div className='grid justify-center gap-9  p-[5rem] lg:flex col sm:grid md:flex col' >
      <motion.div
                ref={ref}
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                transition={{
                  duration: 4,
                  type: 'spring', // Use spring for a bouncy effect
                  bounce: 0.8, // Adjust bounce value as needed
                }}
                style={{ zIndex: 1 }}>
        <div>
          <Sliders slides={firstSlides}  />
        </div>
        </motion.div>
        <motion.div
                   ref={ref}
                   initial={{ y: 250, opacity: 0 }}
                   animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                   transition={{
                     duration: 4,
                     type: 'spring', // Use spring for a bouncy effect
                     bounce: 0.8, // Adjust bounce value as needed
                   }}
                   style={{ zIndex: 1 }}>
        <div className='mt-[10px] lg:mt-[120px] md:mt-[70px]'>
          <p className='w-[75vw] text-[#B99D75] text-[20px] font-serif lg:w-[35vw] md:w-[30vw]'>Indulge in luxury at RayApartment's prime serviced apartments for exceptional comfort.</p>
          <h1 className='text-[1.5rem] w-[90vw] text-[black] mt-[20px] sm:w-[40vw] lg:text-[2.3rem] md:w-[40vw] md:text-[1.2rem] '> Redefining travel comfort with seamless, personalized, and innovative hotel experiences. Your ideal stay, effortlessly booked for exceptional satisfaction.</h1>
        </div>
        </motion.div>
     

      </div>
     
          <div className='grid justify-center gap-[70px]  sm:flex col '> 
                <motion.div
                  initial={{ y: 350, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 4 }}
                  style={{ zIndex: 1 }}>
                <div>
                  <img
                  className='h-[82vh] w-[40vw]  lg:h-[82vh] lg:w-[20vw] md:w-[30vw] md:h-[75vh]'
                    src={Dan}
                    alt="Description of the image"
                  />
               </div>
               </motion.div>
               
              <div className='md:mt-[60px]'>
                <h1 className='text-black text-[1.5rem] w-[60vw] mt-[0] lg:w-[40vw] lg:text-[2rem] lg:mt-[10rem] md:text-[1.2rem] md:w-[35vw] '>Be the first to explore RayApartment's revolutionary booking app. Secure your spot on the 
                waitlist for VIP access, early benefits and surprises. </h1>
                <div>
                
                <button onClick={openModal} className='w-[30vw] 
                h-[40px]
                bg-[#1876F2]
                text-[white] 
                text-[1rem] 
                rounded-md 
                font-bold 
                mt-[20px]
                lg:w-[10vw] h-[40px] 
                md:w-[15vw]
                ' >Download</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  
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
                  <div className='flex col bg-[black] w-[30vw] h-[11vh] mt-[30px] py-[8px] rounded-md lg:w-[13vw] lg:h-[9vh] md:w-[20vw] md:h-[10vh]'>
                            <img src={google} alt="" className='w-[50px] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px]' />
                            <div className='mt-[4px]'>
                            <p  className='font-bold text-[#6B6B6D] lg:text-[18px] md:text-[11px]'>Get it on</p>
                            <h1 className='font-medium text-white text-[1.5rem] mt-[-10px] lg:text-[1.5rem] md:text-[1.2rem]'>Google Play</h1>
                            </div>
                           
                    </div>
                    <div className='flex col bg-[black] w-[30vw] h-[11vh] mt-[30px] py-[8px] px-[3px] rounded-md lg:w-[13vw] lg:h-[9vh] md:w-[20vw] md:h-[10vh]'>
                            <img src={apple} alt="" className='w-[50px] bg-transparent lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px]' />
                            <div className='mt-[4px]'>
                            <p  className='font-bold text-[#6B6B6D] text-[14px] lg:text-[14px] md:text-[11px]'>Download on the</p>
                            <h1 className='font-medium text-[#AAAAAA] text-[1.5rem] mt-[-10px] lg:text-[1.5rem] lg:mt-[-10px] md:text-[1.2rem]'>App store</h1>
                            </div>
                           
                    </div>
                </div>
    
                </div>
              </div>
            
              
          </div>
      <div className='mt-[40px]'>
            <h1 className='text-center text-[black] text-[3rem] font-bold'>Contact Us</h1>
          <div className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1685814830158-e4b368134de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="text-white text-center z-10">
                  <h1 className='text-[1.5rem] font-serif  font-bold sm:text-[2rem] font-serif'>Discover Comfort at RayApartment</h1>
                  <p className="mt-2 text-[1rem]">Indulge in luxury living, tailored services, and unique experiences for an unforgettable stay.</p>
                  <h1 className="text-[18px] font-bold sm:text-[20px] ">Tel: +1 212-555-6688</h1>
                  <h3>Email: reservation@cozystay.com</h3>
                </div>
        </div>
        
      </div>
      
     

        <Footers/>
    </div>
  )
}

export default Home