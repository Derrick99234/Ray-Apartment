import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    'https://libertatravel.hr/wp-content/uploads/2023/05/Grape-harvest.jpg',
    'https://images.unsplash.com/photo-1685814830158-e4b368134de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1615471618985-97108e2ba478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1704973836219-4c9414787505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0ZjdGd01HLWZrMHx8ZW58MHx8fHx8'
    
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
      className="relative h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${images[backgroundIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white text-center z-10">
        <p className="mt-2">THE LATEST NEWS AND BLOG</p>
        <h1 className="text-[5rem] font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default AnimatedBackground;
