import React from 'react'

function Fqa(props) {
  const firstProduct = props.data[0];

  


  return (
    
   
            <>
             
                <h1 className='text-4xl text-yellow-500 mt-20 ml-20 font-bold hover:text-yellow-600 w-80 cursor-pointer hover:underline'>
                    {firstProduct.mainHeading}
                </h1>
    
                <section className="py-24 flex justify-center">
                    <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
    
                            {/* FAQ Item 1 */}
                            <div className="p-4 rounded-xl transition duration-500 hover:bg-yellow-500 hover:border-indigo-600">
                                <button
                                    className="flex items-center justify-between w-full text-left text-lg font-normal text-red-500 transition duration-500 hover:text-white"
                                  
                                >
                                    <h5>How can I reset my password?</h5>
                                    <svg
                                        className='w-6 h-6 transition-transform transform '
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 12h12m-6-6v12" />
                                    </svg>
                                </button>
                                <div className='mt-4 text-base leading-6  bg-gray-100 p-2 rounded'>
                                    <p>To reset your password, click on "Forgot Password" on the login page, and follow the instructions sent to your email.</p>
                                </div>
                            </div>
    
                            {/* FAQ Item 2 */}
                            <div className="p-4 rounded-xl transition duration-500 hover:bg-yellow-500 hover:border-indigo-600">
                                <button
                                    className="flex items-center justify-between w-full text-left text-lg font-normal text-red-500 transition duration-500 hover:text-white"
                                
                                >
                                    <h5>How do I update my billing information?</h5>
                                    <svg
                                        className='w-6 h-6 transition-transform transform '
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 12h12m-6-6v12" />
                                    </svg>
                                </button>
                                <div className={`mt-4 text-base leading-6  bg-gray-100 p-2 rounded`}>
                                    <p>You can update your billing information by navigating to the "Billing" section in your account settings.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl transition duration-500 hover:bg-yellow-500 hover:border-indigo-600">
                                <button
                                    className="flex items-center justify-between w-full text-left text-lg font-normal text-red-500 transition duration-500 hover:text-white"
                                
                                >
                                    <h5>How do I update my billing information?</h5>
                                    <svg
                                        className='w-6 h-6 transition-transform transform '
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 12h12m-6-6v12" />
                                    </svg>
                                </button>
                                <div className={`mt-4 text-base leading-6  bg-gray-100 p-2 rounded`}>
                                    <p>You can update your billing information by navigating to the "Billing" section in your account settings.</p>
                                </div>
                            </div>
    
                            {/* FAQ Item 3 */}
                            <div className="p-4 rounded-xl transition duration-500 hover:bg-yellow-500 hover:border-indigo-600">
                                <button
                                    className="flex items-center justify-between w-full text-left text-lg font-normal text-red-500 transition duration-500 hover:text-white"
                                    
                                >
                                    <h5>How can I contact customer support?</h5>
                                    <svg
                                        className='w-6 h-6 transition-transform transform '
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 12h12m-6-6v12" />
                                    </svg>
                                </button>
                                <div className='mt-4 text-base leading-6 '>
                                    <p>To contact customer support, visit the "Support" page, where you can either call or email our team.</p>
                                </div>
                            </div>
    
                            {/* FAQ Item 4 */}
                            <div className="p-4 rounded-xl transition duration-500 hover:bg-yellow-500 hover:border-indigo-600">
                                <button
                                    className="flex items-center justify-between w-full text-left text-lg font-normal text-red-500 transition duration-500 hover:text-white"
                                    
                                >
                                    <h5>How do I delete my account?</h5>
                                    <svg
                                        className='w-6 h-6 transition-transform transform'
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 12h12m-6-6v12" />
                                    </svg>
                                </button>
                                <div className='mt-4 text-base leading-6 '>
                                    <p>To delete your account, go to "Account Settings" and find the "Delete Account" option at the bottom of the page.</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </section>
            </>
       
        )
      }
    
    
    


export default Fqa;