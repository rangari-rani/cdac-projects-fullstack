import React from 'react'
import { checklistItems } from '../constants'
import { CheckCircle2Icon } from 'lucide-react'
import logo1 from "../assets/logo1.png"
const Workflow = () => {
  return (
    <div className='mt-20 '>
        <h2 className='text-3xl sm:text-5xl  lg:text-6xl text-center mt-6 tracking-wide '>Accelerate your {" "}  
        <span className='bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text'>task workflow.</span></h2>
        <div className="flex flex-wrap justify-center">
  <div className="p-2 w-full h-full lg:w-1/2 flex items-center">
    {/* Adjust image height */}
    <img src={logo1} alt="Task" className="w-full h-auto max-h-[500px] object-cover" />
  </div>
  <div className="pt-12 w-full lg:w-1/2">
    {checklistItems.map((item, index) => (
      <div key={index} className="flex mb-8">
        <div className="text-blue-500 mx-4 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
          <CheckCircle2Icon />
        </div>
        <div>
          <h5 className="mt-1 mb-1 text-xl">{item.title}</h5>
          <p className="text-md text-neutral-500">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Workflow