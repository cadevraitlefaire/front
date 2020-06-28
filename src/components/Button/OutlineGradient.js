import React from 'react';

export const OutlineGradient = ({children, className = '', Icon}) => (
  <button className={`mx-auto lg:mx-0 border-gradient transition ease-in-out duration-200 text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg ${ className }`}>
    { Icon ? <Icon className="mr-2" /> : null }
    <span className="my-auto text-custom gradient">
      {children}
    </span>
  </button>
);
