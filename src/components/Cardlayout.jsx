import React from 'react'

function Cardlayout() {
  return (

    <>

    <div className='flex flex-col items-center mt-7'>
  {/* Main Heading */}
  <h1 className='text-4xl font-bold mb-8 text-white mr-[75%]'>Top games</h1>

  {/* Cards Container */}
  <div className='flex justify-between space-x-3'>
    {/* Card 1 */}
    <div className='flex flex-col items-center'>
      <img src='/images/lol.jpg' alt='Card 1' className='w-40 h-58 mb-4' />
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40  cursor-pointer hover:underline'>
      League of  Legends 
            </h2>
    </div>

    {/* Card 2 */}
    <div className='flex flex-col items-center'>
      <img src='\images\csgo.jpg' alt='Card 2' className='w-40 h-58 mb-4' />
      
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40  cursor-pointer hover:underline'>
      CS:GO 
            </h2>
    </div>

    {/* Card 3 */}
    <div className='flex flex-col items-center'>
      <img src='/images/valorant.jpg' alt='Card 3' className='w-40 h-58 mb-4' />
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40 -ml-2 cursor-pointer hover:underline'>
      VALORANT
            </h2>
    </div>

    {/* Card 4 */}
    <div className='flex flex-col items-center'>
      <img src='/images/dota.jpg' alt='Card 4' className='w-40 h-58 mb-4' />
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40 -ml-2 cursor-pointer hover:underline'>
      DOTA 2
            </h2>

    </div>

    {/* Card 5 */}
    <div className='flex flex-col items-center'>
      <img src='/images/cod.jpg' alt='Card 5' className='w-40 h-58 mb-4' />
      
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40  cursor-pointer hover:underline'>
      Call of Duty
            </h2>
    </div>

    <div className='flex flex-col items-center'>
      <img src='/images/Pokemon.jpg' alt='Card 5' className='w-40 h-58 mb-4' />
      
      <h2 className='text-xl text-white font-bold hover:text-yellow-500 w-40  cursor-pointer hover:underline'>
      Pokémon
            </h2>
    </div>

    <div className='flex flex-col items-center'>
      <img src='/images/gaming_en-mittig-1.jpg' alt='Card 5' className='w-40 h-58 mb-4' />
      
      <h2 className='text-base text-white  hover:text-yellow-500 w-40  cursor-pointer hover:underline'>
      Everything Gaming and more...
            </h2>
    </div>
  </div>
</div>
<hr className='mt-20 w-[87%] ml-20' />
</>
  )
}

export default Cardlayout