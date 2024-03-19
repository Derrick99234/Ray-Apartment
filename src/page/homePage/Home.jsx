import React, { useState } from 'react';
import Footers from '../../components/Footers/Footers'
import Sliders from '../../components/Sliders/Sliders';
// import News from '../../components/Newslide/News'
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
import Animatedd from '../../components/AnimatedBackground/Animatedd';


// const customSlides = [
//   {
//     url: 'https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   }
// ];


const firstSlides = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        <Animatedd>
          <div className="text-white text-center">
            <p className='text-[1rem] '>Find Your Bliss at RayApartment</p>
            <h1 className='text-[2rem] font-bold '>Embark on Your Journey to Exceptional Comfort and Luxury with RayApartment</h1>
          </div>
       </Animatedd>
        <div className='grid ml-[20px] justify-center sm:ml-[90px] xl:flex col gap-10 justify-center mt-[40px] md:grid lg:grid'>
        
          <div className='md:ml-[15px]'>
              <FaHeart size={24} color="#FF6B6B" className='bg-[#AAAAAA] rounded-xl w-[40px] h-[40px] p-[8px] ' />
            <h1 className='text-[1.3rem] text-[black] font-bold font-mono md:text-[1.7rem] xl:text-[1.4rem]'>Personalized Experiences</h1>
            <p className='sm:w-[70vw] text-[black] md:w-[80vw] md:text-[1.5rem] xl:w-[25vw] xl:text-[1.2rem] '>RayApartment tailors stays to individual preferences, ensuring a unique and personalized travel experience for each user.</p>
          </div>
      
          
            <div className='md:ml-[15px]'>
              <BiCheck size={30} color="#fff" className='bg-[green] rounded-xl' />
              <h1 className='text-[1.3rem] text-[black] font-bold font-mono md:text-[1.5rem] xl:text-[1.4rem]'>Seamless Booking</h1>
              <p className='sm:w-[70vw] text-[black] xl:w-[25vw] xl:text-[1.2rem] md:w-[80vw] md:text-[1.4rem]'>RayApartment prioritizes user convenience with an intuitive and hassle-free booking process, making it easy for travelers to secure their ideal accommodations..</p>
            </div>
         
          
          <div className='md:ml-[15px]'>
             <IoIosOptions size={25} color="#000"  className='bg-[plum] rounded-xl w-[40px] h-[40px] p-[7px]'/>
            <h1 className='sm:text-[1.3rem] text-[black] font-bold font-mono xl:text-[1.4rem] md:text-[1.5rem]'>Comprehensive Features</h1>
            <p className='sm:w-[70vw] text-[black] xl:w-[25vw] xl:text-[1.2rem] md:w-[80vw] md:text-[1.4rem]'>RayApartment tailors stays to individual preferences, ensuring a unique and personalized travel experience for each user.</p>
          </div>
          
        </div>
        {/* E443b417 */}
        
        <div className='text-center mt-[10rem]' >
          <h3 className='text-[#52624E] uppercase font-bold text-[1.5rem] font-serif'>Welcome to RaysApartment</h3>
          <h1 className=' text-[1.5rem] text-[black] mt-[10px] w-full lg:w-full lg:text-[3rem] md:text-[2rem]'>RayApartment offers extraordinary accommodations, personalized 
         <br /> services, and the promise of unforgettable 
        <br /> holiday experiences.</h1>
            <p className='text-[#8E908E] mt-[30px] mb-[30px] text-[13px] w-full lg:w-full xl:text-[20px] md:text-[18px]'>RayApartment offers exceptional lodgings, a blend of harmonious hotels and chalets. Each room 
           <br /> boasts unique decor, Victorian furniture, and luxurious amenities. Our authentic hospitality invites you to stay,
           <br /> indulge, and relish the best in comfortable accommodations at RayApartment.</p>
        </div>
       
        
      
      <div className='grid justify-center gap-9  p-[5rem] xl:flex col sm:grid md:flex col' >
     
        <div>
          <Sliders slides={firstSlides}  />
        </div>
        <div className='mt-[10px] xl:mt-[120px] md:mt-[70px]'>
          <p className='w-[75vw] text-[#B99D75] text-[20px] font-serif xl:w-[35vw] md:w-[30vw]'>Indulge in luxury at RayApartment's prime serviced apartments for exceptional comfort.</p>
          <h1 className='text-[1.5rem] w-[90vw] text-[black] mt-[20px] xl:w-[40vw] xl:text-[2.3rem] md:w-[40vw] md:text-[1.2rem] '> Redefining travel comfort with seamless, personalized, and innovative hotel experiences. Your ideal stay, effortlessly booked for exceptional satisfaction.</h1>
        </div>
       
     

      </div>
     
          <div className='grid justify-center sm:flex sm:gap-[0] sm:justify-center'> 
                <motion.div
                  initial={{ y: 350, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 4 }}
                  style={{ zIndex: 1 }}>
                <div>
                  <img
                  // className='w-1/2 h-auto max-w-full
                  // max-[600px]:ml-[15%]
                  // xl:h-[82vh] xl:w-[20vw] 
                  // min-[624px]:w-[3/5] min-[624px]:h-auto min-[624px]:max-w-full lg:w-[26vw] lg:h-[86vh]
                  //  '  

                  className='w-1/2 h-auto max-w-full ml-[15%] 
                 
                  sm:w-[33vw] sm:h-[60vh] 
                  md:w-[30vw] md:h-[45vh] lg:w-[26vw] lg:h-[86vh]
                  [@media(min-width:1100px)]:h-[70vh]
                  xl:h-[88vh] xl:w-[20vw] '
                   

                  // className='h-[82vh] w-[60vw] ml-[90px] max-[480px]:ml-[30px]  max-[380px]:h-[70vh]
                  // sm:w-[33vw] sm:h-[70vh] xl:h-[82vh] xl:w-[20vw] 
                  // md:w-[30vw] md:h-[75vh] lg:w-[26vw] lg:h-[86vh] ' 
                    src={Dan}
                    alt="Description of the image"
                  />
               </div>
               </motion.div>
               
              <div className='mt-[40px] ml-[4%] sm:mt-[40px] md:mt-[80px]'>
                <h1 className='text-black text-[1.5rem] ml-[40px]  w-[60vw] mt-[0]  max-[480px]:text-[17px]
                sm:text-[1rem] sm:w-[40vw] sm:mt-[0] xl:w-[40vw] xl:text-[2rem] xl:mt-[10rem]
                 md:text-[1.2rem] md:w-[35vw]
                 [@media(min-width:1100px)]:mt-[2rem] '>Be the first to explore RayApartment's revolutionary booking app. Secure your spot on the 
                waitlist for VIP access, early benefits and surprises. </h1>
                <div>
                
                <button onClick={openModal} className='w-[30vw] 
                h-[40px]
                bg-[#1876F2]
                text-[white] 
                text-[1rem] 
                rounded-md 
                font-bold 
                ml-[50px] 
                mt-[20px]
                sm:w-[20vw]
                lg:w-[10vw] h-[40px] 
                md:w-[15vw]
              
                ' >Download</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  
                  <div>
                <h1 className='text-center text-black font-bold text[1rem]'>Join the waitlist</h1>
                <p className='text-black text-[17px] mt-[20px] '>Unlock exclusive benefits, early access, and unbeatable deals! Join our waitlist today to secure your spot and be the first to experience luxury with RayApartment. Don't miss out!</p>
            <div className='mt-[20px]'>
                <label htmlFor="" className='text-[black] font-semibold text-[1.1rem]'>Fullname</label> <Input className='text-[black] outline w-[45vw] py-[10px] bg-[#F8F8F8] outline-none border-2 border-gray-300 rounded-md pl-[10px] my-[20px] 
                [@media(max-width:425px)]:w-[65vw]
                sm:w-[35vw] md:w-[33vw] lg:w-[30vw] xl:w-[20vw]' type="text" placeholder="E.g John Doe" id="1"  />
                <label htmlFor="" className='text-[black] font-semibold text-[1.1rem]'>Email address</label><Input type="email" placeholder="E.g Johndoe@gmail.com" id="2" className='text-[black] w-[45vw] outline-none border-2 border-gray-300 mt-[20px] rounded-md pl-[10px] py-[10px] bg-[#F8F8F8] 
                 [@media(max-width:425px)]:w-[65vw]
                sm:w-[35vw] md:w-[33vw] lg:w-[30vw] xl:w-[20vw]'/>
                
              <button className='text-center text-[white] w-[20vw] bg-[#1876F2] h-[50px] rounded-md mt-[30px] [@media(max-width:475px)]:w-[30vw]
             ' onClick={togglePopUp}>Join Waitlist</button>
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
                <div className='flex col gap-5 ml-[20px] lg:ml-[40px] sm:ml-[40px] md:ml-[40px] xl:ml-[40px]'>
                  <div className='flex col bg-[black] w-[32vw] h-[12vh] mt-[30px] py-[8px] rounded 
                  
                  sm:w-[24vw] sm:h-[11vh]
                  xl:w-[13vw] xl:h-[9vh] md:w-[20vw] md:h-[8vh] 
                  lg:w-[15vw] lg:h-[10.5vh]   [@media(max-width:500px)]:w-[43vw]
                  [@media(max-width:430px)]:h-[9.5vh]
                  [@media(max-width:415px)]:w-[1vw]'
                  >
                            <img src={google} alt="" className='w-[45px] xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px] ' />
                            <div className='mt-[4px]'>
                            <p  className='font-bold text-[#6B6B6D] text-[10px]sm:text-[13px] lg:text-[18px] md:text-[11px]'>Get it on</p>
                            <h1 className='font-medium text-white text-[1.1rem] mt-[-10px] sm:text-[1.2rem] xl:text-[1.5rem] md:text-[1.2rem]'>Google Play</h1>
                            </div>
                           
                    </div>

{/* <div className='flex flex-col bg-black w-full sm:w-[40vw] h-auto sm:h-[10vh] mt-[4] py-[2] rounded-md sm:w-[24vw] xl:w-[13vw] md:w-[20vw] lg:w-[15vw]'>
  <img src={google} alt="" className='w-[45px] xl:w-[50px] md:w-[40px] md:[h-40px] md:[pt-2]' />
  <div className='mt-[2]'>
    <p className='font-bold text-gray-500 text-xs sm:text-sm md:text-xs lg:text-base'>Get it on</p>
    <h1 className='font-medium text-white text-[1rem] sm:text-[1.2rem] xl:text-[1.5rem] md:text-[1.2rem] mt-[-8px]'>Google Play</h1>
  </div>
</div> */}

                    <div className='flex col bg-[black] w-[32vw] h-[11.5vh] mt-[30px] py-[10px] px-[3px] rounded-md
                     sm:w-[25vw] h-[9vh] xl:w-[13vw] xl:h-[9vh] 
                     md:w-[20vw] md:h-[8vh]
                      lg:w-[15vw] lg:h-[10vh] 
                      [@media(max-width:530px)]:w-[35vw]  [@media(max-width:530px)]:px-[0px]
                      [@media(max-width:430px)]:h-[9.5vh] [@media(max-width:430px)]:w-[30vw]
                      [@media(min-width:1100px)]:w-[14vw]
                      '>
                            <img src={apple} alt="" className='w-[45px] h-[45px] pt-[2px] bg-transparent xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] md:pt-[3px] ' />
                          <div className='mt-[4px] lg:pt-[5px]'>
                            <p  className='font-bold text-[#6B6B6D] text-[12px] 
                            [@media(max-width:430px)]:text-[10px]
                            sm:text-[13px] xl:text-[14px] md:text-[11px]'>Download on the</p>
                            <h1 className='font-medium text-[#AAAAAA] text-[1.2rem]
                            [@media(max-width:430px)]:text-[1rem] pt-[5px]
                            mt-[-10px] sm:text-[1.2rem] xl:text-[1.5rem] xl:mt-[-10px] md:text-[1.2rem]'>App store</h1>
                          </div>
                           
                    </div>
                </div>
    
                </div>
              </div>
            
              
          </div>
      <div className='mt-[40px]'>
            <h1 className='text-center text-[black] text-[3rem] font-bold'>Contact Us</h1>
          <div className="relative h-[55vh] group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="text-white text-center z-10">
                  <h1 className='text-[1.5rem] font-serif  font-bold sm:text-[2rem] font-serif'>Discover Comfort at RayApartment</h1>
                  <p className="mt-2 text-[1rem]">Indulge in luxury living, tailored services, and unique experiences for an unforgettable stay.</p>
                  <h1 className="text-[18px] font-bold sm:text-[20px] ">Tel: +44 777-811-2713</h1>
                  <h3>Email: inforoyalhomes2024@gmail.com</h3>
                </div>
        </div>
        
      </div>
      
     

        <Footers/>
    </div>
  )
}

export default Home