import React from 'react';


function Latest_news(props) {
    const firstProduct = props.data[0];

    return (
        <>

            <h1 className='text-4xl text-yellow-500 mt-20 ml-20 font-bold hover:text-yellow-600 w-80  cursor-pointer hover:underline'>
                {firstProduct.mainHeading}
            </h1>


            <div className={`flex gap-5 mt-8 ${props.direction}`}>


                <div className='w-[65%] pl-16'>
                    <div className=' mt-3'>
                        <img src={firstProduct.img} alt={firstProduct.heading} className='h-full w-full' />
                    </div>

                    {/* Conditional Rendering like if */}
                    {firstProduct.btn && (
                        <button className="bg-yellow-500 text-black px-4 py-1 font-bold mt-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            {firstProduct.btn}
                        </button>
                    )}
                    {/* like if else */}
                    {/* {firstProduct.btn ? (
                        <button className="bg-yellow-500 text-black px-4 py-1 font-bold mt-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            {firstProduct.btn}
                        </button>
                    ) : (
                        "No Btn here"
                    )} */}

                    <h1 className='text-4xl font-semibold text-white mt-4 line-clamp-2'>
                        {firstProduct.heading1}
                    </h1>


                    <p className='text-base text-white mt-5 line-clamp-2'>
                        {firstProduct.para1}
                    </p>
                </div>



                <div className='w-[30%]  '>
                    {props.data.slice(1).map((ele, index) => (

                        <div key={index} className=' h-40 gap-4 p-3  '>
                            {firstProduct.btn && (
                                
                                <button className="bg-yellow-500 text-black border border-black   px-4 py-1 font-bold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    {firstProduct.btn}
                                </button>
                            )}

                            <div className="flex h-40 gap-4 p-3 ">
                                <img className='h-[80%] w-[50%] mt-3' src={ele.img} alt={ele.heading} />

                                <div className='w-[49%] flex flex-col justify-between'>


                                    <div className='flex flex-col justify-between'>


                                        <h3 className=' font-semibold text-white line-clamp-3 mt-3 -ml-2 leading-none'>
                                            {ele.heading}
                                        </h3>



                                        <p className='text-sm text-gray-400 line-clamp-3 leading-none mt-1 -ml-2'>
                                            {ele.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='mt-10 w-[87%] ml-20' />
        </>
    );
}

export default Latest_news;


