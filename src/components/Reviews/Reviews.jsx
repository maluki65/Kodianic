import React from 'react';
import './Reviews.css';
import { PiStarFill } from "react-icons/pi";

function Reviews({testimonials}) {
  return (
    <>
      <div className='py-2 px-4 flex flex-col gap-2'>
        <div className='flex gap-2 review'>
          <img 
            src={testimonials.image}
            loading='lazy'
            className='rounded-full h-12 w-12'
          />
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <h1 
                className='text-md flex items-center gap-2 text-[#3d3d3d] font-semibold'>
                {testimonials.name} <span className='text-sm text-[#706f6f] font-normal'>
                  from</span>
              </h1>
              <p className='rounded-md p-1 bg-[#104579] text-[#fff] country'>
                {testimonials.country}
              </p>
            </div>
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <PiStarFill 
                  key={index}
                  className='text-[#F0BC02] w-5 h-5'/>
              ))}
            </div>
          </div>
        </div>
        <p className='text-md text-[#515050] pReview'>{testimonials.review}</p>
      </div>
      <hr className='my-[2px] h-[1.5px] font-semibold shadow-2xl mx-2 bg-[#cfcece]'/>
    </>
  )
}

export default Reviews