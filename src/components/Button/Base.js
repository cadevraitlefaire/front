import React from 'react';

export const Base = ({children, className = '', Icon}) => (
  <button className={`mx-auto lg:mx-0 hover:bg-gray-200 bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg ${ className }`}>
    { Icon ? <Icon className="mr-2" /> : null }
    {children}
  </button>
);
