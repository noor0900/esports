import React from 'react'
import Card from './Card';



function Allnews(props) {
    const firstProduct = props.data[0];
    console.log("string");
    
    return (
        <>
        l

        <h1 className='text-4xl text-yellow-500 mt-20 ml-20 font-bold hover:text-yellow-600 w-80  cursor-pointer hover:underline'>
                {firstProduct.mainHeading}
            </h1>


  <div class="flex flex-row space-x-4  m-10 ml-24 font-serif font-bold  ">
  <button class="text-yellow-500 hover:text-yellow-600 text-sm underline  ">All</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">League of Legends</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">CS:GO</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">VALORANT</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">DOTA 2</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">Call of Duty</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">Pokemon</button>
  <button class="text-yellow-500 hover:text-yellow-600 text-sm">Gaming</button>
            </div>

            <div className='flex flex-wrap gap-1 -mt-10 m-20  h-82  '>
                {props.data.map((ele, index) => (
                    <Card key={index} ele={ele} />
                ))}
            </div>

            <div className=' flex justify-center mt-4'>
        <button className='bg-yellow-500   px-10 py-3  font-bold hover:bg-yellow-600 hover:text-white'>
          Show more news <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    <hr className='mt-10 w-[87%] ml-20' />

        </>
    )
}

export default Allnews