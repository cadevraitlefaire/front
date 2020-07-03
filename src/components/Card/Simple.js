import React from 'react';
import { Link } from 'react-router-dom';

export const SimpleCard = ({to = '', title, subtitle}) => {
  return (
    <Link to={to} className="flex flex-col relative w-full bg-white hover:shadow-lg transition-all ease-in-out duration-200 relative rounded border border-gray-300">
      <div className="flex flex-col flex-grow">
        <div className="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
          <h3 className="text-lg font-bold mr-10">
            <span className="w-2/3 block mb-2 text-gray-800">
              { title }
            </span>
            {
              subtitle ?
                (
                  <span className="w-5/6 block text-gray-500">
                  { subtitle }
                </span>
                ) :
                null
            }
          </h3>
        </div>
      </div>
    </Link>
  )
};
