import React from 'react'
import './TestimonialItems.css'
import { PiStarFill } from "react-icons/pi";

function TestimonialItems({testimonials}) {
  return (
    <div className='my-5 shadow-sm border-2 border-[#ebe9e9] space-y-3 rounded-sm p-4 testimony'>
      <div className='flex flex-col items-start space-x-1'>
        <div className='flex'>
          {[...Array(5)].map((_, i) => (
            <PiStarFill key={i} className='flex text-[#F0BC02] w-4 h-4 iconsT'/>
          ))}
        </div>
      </div>
      <p className='w-full'>{testimonials.description}</p>
      <div className='flex gap-4 items-center'>
        <img 
          src={testimonials.image}
          loading='lazy'
          className='h-15 w-15 rounded-full'
        />
        <div className='flex flex-col gap-1'>
          <h2 className='font-semibold'>{testimonials.name}</h2>
          <p className='text-sm'>{testimonials.position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItems