import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function Sliders({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (
<div>
    <div className='w-[90vw] h-[80vh] group lg:w-[35vw] lg:h-[92vh]  group md:w-[45vw]  '>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full bg-center bg-cover duration-500'
    ></div>
    {/* left arrow */}
    <div className='hidden group-hover:block relative bottom-[9rem] w-[45px] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* right arrow */}
    <div className='hidden group-hover:block relative bottom-[12rem] w-[45px] -translate-x-0 translate-y-[-50%] ml-[18.2rem] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    
  </div>

  <div className='flex top-4 justify-center py-2 '>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled className='mt-[-30px] text-[#fff]' />
        </div>
      ))}
    </div>
</div> 
);

}
 

export default Sliders