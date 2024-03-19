import React, { useState, useEffect } from 'react';

const Animatedd = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://a0.muscache.com/im/pictures/e1aee533-1b0d-442c-a6db-35e1df19c862.jpg?im_w=1200',
    'https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Cycle through images
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div
      className="relative h-[87vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${images[backgroundIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white text-center z-10">
            <p className='text-[1.2rem] '>Find Your Bliss at RayApartment</p>
            <h1 className='text-[2rem] font-bold font-serif'>Embark on Your Journey to <span className='text-[#CE8455]'>Exceptional Comfort </span> <br />and Luxury with RayApartment</h1>
          </div>
    </div>
  );
};

export default Animatedd;
