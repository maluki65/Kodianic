import React from 'react';
import './services.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function servicesItem({service}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Portofolio')
  }

  return (
    <div className='bg-[#fff]  grid grid-cols-[60%_40%] overflow-hidden mx-auto max-w-[90%] h-full py-5 px-5 gap-2 rounded-3xl shadow-xl serviceCard'>
      <div className='grid content-center gap-3'>
        <div className='flex items-center justify-between'>
         <h2 className='text-7xl'>{service.heading}</h2>
         <p className='rounded-full py-2 px-3 bg-[#F0BC02] text-sm hidden SForm '>{service.form}</p>
        </div>
        <p className=''>{service.content}</p>
        <hr className='my-[2px] h-[1.5px] font-semibold shadow-2xl mx-2 bg-[#f8f6f6]' />
        <div className='flex items-center justify-between px-4 Sprices'>
          <p className='text-[#104579] font-medium cursor-pointer hover:underline hover:text-[#F0BC02]'>${service.StartPrice} - ${service.EndPrice}</p>
          <a 
            onClick={handleNavigate}
            className='flex gap-1 text-[#104579] cursor-pointer hover:underline items-center hover:text-[#F0BC02]'><FaExternalLinkAlt size={18}/> <span className=''>View details</span> </a>
        </div>
      </div>
      <div className='h-full w-full'>
        <img src={service.address} alt={service.heading} className='object-cover rounded-tr-[5rem] h-full w-full '/>
      </div>
    </div>
  )
}

export default servicesItem