import React from 'react';
import './services.css';

function servicesItem({service}) {

  return (
    <div className='bg-[#fff] grid grid-cols-[60%_40%] max-w-[90%] h-full mx-auto py-5 px-10 gap-2 rounded-3xl shadow-xl overflow-hidden serviceCard'>
      <div className='grid content-center gap-10'>
        <h2 className='text-7xl'>{service.heading}</h2>
        <p className=''>{service.content}</p>
        <button className='py-2 px-4 border-1 bg-[#104579] border-[#000] text-[#fff] cursor-pointer rounded-full mr-auto hover:bg-[#F0BC02]'>
          Find out more
        </button>
      </div>
      <div className='h-full w-full'>
        <img src={service.address} alt={service.heading} className='object-cover rounded-tr-[5rem] h-full w-full '/>
      </div>
    </div>
  )
}

export default servicesItem