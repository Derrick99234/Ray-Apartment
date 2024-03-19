import React from 'react';

const myButton = ({ text, onClick, style , className}) => {
  return (
    <myButton
      onClick={onClick}
      style={style}
      className={className}
    
    >
      {text}
    </myButton>
  );
};

export default myButton;
