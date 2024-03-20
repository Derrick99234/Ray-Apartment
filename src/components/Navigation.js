// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ pages }) => {
  return (
    <nav>
      <ul className='flex'>
        {pages.map((page) => (
          <li key={page.path}>
            <Link className="
             pr-10
             font-medium
             text-[17px]
             text-[#1876f2]
             
             "  to={page.path}>{page.name}       </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
