import React, { useMemo, useState } from 'react';
import './serviceItems.css';
import { blue, cap, cloud, pink, gojo, mount, tree, Earth } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';
import handleServiceDelete from '../../components/serviceDelete';
import { BsThreeDotsVertical } from "react-icons/bs";

function serviceItems({service}) {
  const [openMenuId, setOpenMenuId] = useState(null);

  const getImageForClient = (name) => {
    const firstLetter = name[0].toLowerCase();
    if ('abcde'.includes(firstLetter)) return blue;
    if ('fghij'.includes(firstLetter)) return cloud;
    if ('klmno'.includes(firstLetter)) return mount;  
    if ('pqrst'.includes(firstLetter)) return tree;
    if ('vwxyxz'.includes(firstLetter)) return Earth;
    return pink;
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='p-2 bg-[#fff] rounded-md flex flex-col gap-1'
       key='serviceRequests'
       initial={{ opacity: 0, scale: 1}}
       animate={{ opacity: 1, scale: 1}}
       exit={{ opacity: 0, scale: 0.95}}
       transition={{ duration: 0.3 }}
        >
        <div className='my-[20px] flex justify-between gap-4 items-center'>
          <img 
            src={getImageForClient(service.name)}
            loading='lazy'
            alt={service.serviceName}
            className='h-12 w-12 object-cover rounded-full'
          />
          <div className='flex flex-col gap-1 items-center'>
            <h1 className='text-[#000] text-base leading-relaxed'>{service.name}</h1>
            <p className='text-[#000] text-sm leading-relaxed'>{service.serviceName}</p>
          </div>
          <div className='relative px-4 py-1'>
            <BsThreeDotsVertical
              className='cursor-pointer'
              onClick={() =>
                setOpenMenuId(openMenuId === service.id ? null : service.id)
              }
            />

            {openMenuId === service.id && (
              <div className='absolute right-0 mt-2 w-28 bg-[#fff] border rounded shadow-lg z-10'>
                <button
                  onClick={async () => {
                    setOpenMenuId(null);
                    const token = localStorage.getItem('csrfToken');
                    handleServiceDelete(service._id, token);
                  }}
                  className='block w-full text-left cursor-pointer px-3 py-1 text-sm hover:bg-[#a5a0a0]'
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1 items-center justify-between'>
            <p className='text-[#000] text-base leading-relaxed'>{service.Email}</p>
            <p className='text-[#fff] text-sm leading-relaxed bg-green-400 py-1 px-2 rounded-full'>{service.phone}</p>
          </div>
          <p className='text-[#104579] text-sm font-semibold leading-relaxed w-fit rounded-full'>Budget: ${service.budget}</p>
          <div className="my-[2px] overflow-hidden " id='FAQ'>
            <details className="group [&_summary::-webkit-details-marker]:hidden transition ease-in duration-700 ">
                <summary
                    className="flex items-center justify-between gap-1.5 rounded-md p-4"
                >
                    <h2 className="text-medium   cursor-pointer text-[#000] hover:underline font-semibold">What Service description</h2>

                    <svg
                    className="size-5 shrink-0 transition-transform cursor-pointer duration-300 text-[#000] group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="px-4 pt-4  text-[#000]">
                  {service.description}
                </p> 
            </details>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default serviceItems