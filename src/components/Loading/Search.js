import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export const SearchLoading = () => useMemo(() => (
  <>
    {
      [0, 1, 2, 3].map((_, key) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={key}>
          <SearchOneLoading />
        </div>
      ))
    }
  </>
), []);

export const SearchOneLoading = () => useMemo(() => (
  <div className="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
    <div className="flex flex-col flex-grow">
      <div className="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
        <h3 className="text-lg font-bold text-gray-darkest mr-10">
          <span className="skeleton-box h-5 w-2/3 block mb-2" />
          <span className="skeleton-box h-5 w-5/6 block" />
        </h3>
      </div>
    </div>
  </div>
), []);
