import React from 'react'

function Follow_us() {
  return (
    <>
    <div className='flex justify-center mt-20'>
  {/* Container */}
  <div className='h-24 w-1/2 bg-black  flex flex-row items-center justify-center space-y-4'>
    
    {/* Logo */}
    {/* <img src='/images/logo (2).png' alt='Logo' className='w-12 h-12  ' /> */}
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <img src="/images/logo (2).png" alt=""  className='w-16 h-12 ml-4'/>
          <span className="self-center  font-bold whitespace-nowrap text-red-600 mt-3 -ml-20 text-2xl  ">esports <span className=' -ml-2 font-normal'>.com</span></span>
        </a>

    {/* Heading */}
    <div>
    <h1 className='text-white text-lg  mb-20 ml-32 mt-5'>Follow Us</h1>
    </div>
    {/* Social Media Icons in a Row */}
    <div className='mr-28'>
    <div className=' flex space-x-3'>
      <a href='https://www.facebook.com' className='text-white'>
        <i className='fab fa-facebook '></i>
      </a>
      <a href='https://www.twitter.com' className='text-white'>
        <i className='fab fa-twitter '></i>
      </a>
      <a href='https://www.instagram.com' className='text-white'>
        <i className='fab fa-instagram '></i>
      </a>
      <a href='https://www.linkedin.com' className='text-white'>
        <i className='fab fa-linkedin '></i>
      </a>
      <a href='https://www.youtube.com' className='text-white'>
        <i className='fab fa-youtube '></i>
      </a>
    </div>
    </div>

  </div>
</div>

    


    <hr className='mt-20 w-[87%] ml-20' />
    

    </>
   

  )
}

export default Follow_us