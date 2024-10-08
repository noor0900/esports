import React from 'react'

function Navbar_2() {
  return (
    <header class='shadow-md font-sans tracking-wide relative '>
    
  
    <div class='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-black min-h-[70px]'>
      
  
      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        
  
        <ul
          class='lg:flex ml-40 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          
          <li class='max-lg:border-b max-lg:py-3  '>
            <a href='javascript:void(0)'
              class='hover:text-red-600 text-white block font-bold text-[17px]'>League of Legends</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>CS:GO</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>DOTA 2</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>Call of Duty </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>Pokemon</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'> VALORANT</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>Gaming</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3 group '><a href='javascript:void(0)'
              class='text-white hover:text-red-600 block font-bold text-[17px]'>Entertainment <i class="fas fa-chevron-right ml-2 group-hover:text-white"></i> </a>
          </li>
          
        </ul>
      </div>
  
     
    </div>
  </header>
  )
}

export default Navbar_2