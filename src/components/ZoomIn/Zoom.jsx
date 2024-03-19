import React from 'react'


const Zoom = ({ src, altText }) => {
    return (
      <div className="relative overflow-hidden group">
        <img
          className="transition-transform transform group-hover:scale-110 transition duration-1000 ease-in-out h-[48vh] w-[72vw] sm:h-[50vh] sm:w-[70vw]"
          src={src}
          alt={altText}
        />
      </div>
    );
  };
export default Zoom;