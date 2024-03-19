import React, { useState, useEffect } from 'react';

const Animated2 = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1618221257490-1d703817596c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
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
        <p className="mt-20 text-[1.2rem]">Temporary Housing Arrangement Options</p>
        <h1 className="text-[3rem] font-bold sm:text-[3rem]  [@media(max-width:400px)]:text-[2rem] xl:text-[4rem]">Accommodation</h1>
      </div>
    </div>
  );
};

export default Animated2;
