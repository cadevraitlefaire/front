import React from 'react';

export const Gradient = ({children, className = '', Icon}) => (
  <button className={`mx-auto lg:mx-0 gradient text-white font-bold rounded-full py-4 px-8 shadow-lg ${ className }`}>
    { Icon ? <Icon className="mr-2 my-auto" /> : null }
    {children}
  </button>
);
