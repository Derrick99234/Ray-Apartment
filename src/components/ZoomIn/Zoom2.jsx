import React from 'react'


const Zoom2 = ({ src, altText }) => {
    return (
      <div className="relative overflow-hidden group">
        <img
          className="transition-transform transform group-hover:scale-110 transition duration-1000 ease-in-out h-[70vh] w-[72vw] sm:h-[70vh] sm:w-[67vw]"
          src={src}
          alt={altText}
        />
      </div>
    );
  };
export default Zoom2;