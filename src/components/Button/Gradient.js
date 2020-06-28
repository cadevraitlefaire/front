import React from 'react';

export const Gradient = ({children, className = '', Icon}) => (
  <button className={`mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full py-4 px-8 shadow-lg ${ className }`}>
    { Icon ? <Icon className="mr-2" /> : null }
    {children}
  </button>
);
