import React from 'react'
import { pricingOptions } from '../constants/index';
import { CheckCircle2Icon } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pricing = () => {
  return (
    <><ToastContainer
    theme="dark" // Use light theme
  />
    <div className='mt-20 '>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>Pricing </h2>
        <div className='flex flex-wrap'>
            {pricingOptions.map((option,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                    <p className='text-4xl mb-8'>{option.title}
                        {option.title === "Pro" && <span className='bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular )</span>}
                    </p>
                    <p className='mb-8'>
                        <span className='text-5xl mt-4 mr-2'>{option.price}</span>
                        <span className='text-neutral-400 tracking-tight '>/Month</span>
                    </p>
                    <ul>
                        {option.features.map((feature,index)=>(
                            <li key={index } className='mt-6 flex items-center'><CheckCircle2Icon/>
                            <span className='ml-2'>{feature}</span></li>
                        ))}
                    </ul>
                    <button onClick={() =>
                  toast.warn("Please log in first to subscribe.", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                      backgroundColor: "#1e90ff",
                      color: "#fff",
                    },
                  })
                } className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-14 tracking-tight text-xl hover:bg-blue-900 border border-blue-500 rounded-lg transition duration-200'>Subscribe  </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Pricing