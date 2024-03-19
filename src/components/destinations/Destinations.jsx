import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Destinations() {

  const slides = [
    {
      url: 'https://a0.muscache.com/im/pictures/856378e3-9e59-4d75-8a06-ac6787e550a0.jpg?im_w=720',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/miso/Hosting-594071424509296167/original/c69251d5-6b8b-44c8-882e-73071af6e59f.jpeg?im_w=720',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/bdc7cd2a-b8b6-4f1a-93e2-e375ddaf01e9.jpg?im_w=720',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ]

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
    <div className='max-w-[100vw] h-[780px] w-full  pb-16 relative group'>
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full  bg-center bg-cover duration-500'>
      </div >
          {/* left arrow */}

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2 bg-black/20 
         text-white cursor-pointer ' >
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>

          {/* right arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 
           text-white cursor-pointer ' >
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div>

          <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Destinations
