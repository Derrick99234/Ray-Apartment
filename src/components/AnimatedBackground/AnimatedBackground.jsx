import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    'https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
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
        <p className="mt-20">THE LATEST NEWS AND BLOG</p>
        <h1 className="text-[4rem] font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default AnimatedBackground;
