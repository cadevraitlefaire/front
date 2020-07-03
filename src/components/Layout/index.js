import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ bgGradient, children, navbar }) => (
  <div className={`leading-normal tracking-normal text-white ${bgGradient ? 'gradient' : 'bg-gray-200'}`}>
    <Navbar {...navbar}/>
    {children}
  </div>
);
