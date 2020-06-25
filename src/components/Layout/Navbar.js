import React from 'react';
import { Menu, Plane } from '../SVG';

export const Navbar = () => (
  <nav id="header" className="fixed w-full z-30 top-0 text-white">

    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

      <div className="pl-4 flex items-center">
        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
           href="#">
          <Plane /> LANDING
        </a>
      </div>

      <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
          <Menu />
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
               href="#">link</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
               href="#">link</a>
          </li>
        </ul>
        <button id="navAction"
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Action
        </button>
      </div>
    </div>

    <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
  </nav>
);
