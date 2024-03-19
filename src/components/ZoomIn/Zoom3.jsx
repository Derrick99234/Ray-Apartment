import React from 'react'


const Zoom3 = ({ src, altText }) => {
    return (
      <div className="relative overflow-hidden group">
        <img
          className="transition-transform transform group-hover:scale-110 transition duration-1000 ease-in-out h-[50vh] w-[25vw]"
          src={src}
          alt={altText}
        />
      </div>
    );
  };
export default Zoom3;