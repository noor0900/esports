import React from 'react'
import Card from './Card';

function Valorat(props) {
    const firstProduct = props.data[0];
    return (
        <>
            <h1 className='text-4xl text-yellow-500 mt-20 ml-16 font-bold hover:text-yellow-600 w-80  cursor-pointer hover:underline'>
                {firstProduct.mainHeading}
            </h1>


            <div className="flex  mt-3">

                <div className=' mt-3 ml-14 w-1/2'>
                    <img src={firstProduct.img} alt={firstProduct.heading} className='h-80 w-[]' />

                </div>
                <h1 className='text-4xl font-semibold text-white mt-4 ml-10 line-clamp-2'>
                    {firstProduct.heading1}
                    <p className='text-base text-white mt-5 line-clamp-2  w-[80%]'>
                        {firstProduct.para1}
                    </p>
                </h1>
            </div>


            {/* <div className=' flex  border m-20'>
                    {props.data.slice(1).map((ele, index) => (
                        
                        <div key={index} className=' h-full w-80  p-3 border border-yellow-500   '>
                            
                         
                            <img className='h-1/2 w-[100%] mt-3 border' src={ele.img} alt={ele.heading} />

                            <div className='w-[49%] '>
                              
                              
                                <div className=' justify-between'>
                                   
                                   
                                    <h3 className=' font-semibold text-white line-clamp-3 mt-3 -ml-2 leading-none'>
                                        {ele.heading}
                                    </h3>

                                   
                                   
                                    <p className='text-sm text-gray-400 line-clamp-3 leading-none mt-1 -ml-2'>
                                        {ele.para}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

            <div className='flex flex-row gap-1 mt-10 m-20  h-82 '>
                {props.data.slice(1).map((ele, index) => (
                    <Card key={index} ele={ele} />))
                }
            </div>
            <hr className='mt-10 w-[87%] ml-20' />
        </>
    )
}

export default Valorat