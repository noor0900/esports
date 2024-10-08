import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className='pt-8 sticky top-0 z-50 bg-[#333333]'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">

          <img src="/images/logo (2).png" alt="" className='h-20 ml-2 -mt-5 ' />
          <span className="self-center text-5xl font-bold whitespace-nowrap text-red-600 -mt-5">esports <span className='text-4xl -ml-2 font-normal'>.com</span></span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 md:bg-transparent md:p-0 text-white hover:text-red-600" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/News" className="block py-2 px-3 md:bg-transparent md:border-0 md:p-0 text-white hover:text-red-600">News</Link>
            </li>
            <li>
              <Link to="/Vedios" className="block py-2 px-3 md:bg-transparent md:border-0 md:p-0 text-white hover:text-red-600">Videos</Link>
            </li>
            <div className='h-6 w-[0.5px] bg-white ml-3'></div>
            <li>
            
           
<label
  class="relative inline-block h-6 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
>
  <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
  <span
    class="absolute inset-y-0 start-0 m-1 size-6 -mt-0 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
  ></span>
</label>


            </li>

            <li className='group'>
              <Link to="" className="block py-2 px-3 md:bg-transparent -mt-1 md:border-0 md:p-0 text-white hover:text-red-600">EN <i className="fas fa-chevron-down text-grey-500 ml-2 group-hover:text-white"></i> </Link>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default Navbar;
