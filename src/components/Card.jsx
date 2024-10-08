import React from 'react'

function Card({ele}) {
  return (
    <>
   



<div className='w-72 p-2'>
  <img className='h-40 w-full mt-2' src={ele.img} alt={ele.heading} />
  <div className='w-full'>
    <div className='flex flex-col justify-between'>
      <h3 className='font-medium text-white line-clamp-2 mt-2 text-sm leading-tight'>
        {ele.heading}
      </h3>
      <p className='text-xs text-gray-400 line-clamp-4 leading-tight mt-2'>
        {ele.para}
      </p>
      
    </div>
  </div>
</div>



</>
  )
}

export default Card