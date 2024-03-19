import React from 'react'


const Zoom = ({ src, altText }) => {
    return (
      <div className="relative overflow-hidden group">
        <img
          className="transition-transform transform group-hover:scale-110 transition duration-1000 ease-in-out h-[50vh] w-[67vw] sm:h-[50vh] w-[27vw]"
          src={src}
          alt={altText}
        />
      </div>
    );
  };
export default Zoom;