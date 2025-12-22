import React from 'react'
import './ProjectItems.css'
import { SiTailwindcss } from "react-icons/si";
import {  FaNodeJs } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectItems({Projects}) {
  return (
    <div className='h-[450px] flex flex-col gap-2 p-1 rounded-md shadow-xl pContainer'>
      <img 
        src={Projects.image}
        loading='lazy'
        alt={Projects.name}
        className=' object-cover rounded-md w-full h-[40%]'
      />
      <div className='my-2 px-3 flex flex-col gap-2 pTexts'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-medium'>
            {Projects.name}
          </h3>
          <a  
            href={Projects.link}
            className='px-3 rounded-4xl bg-green-200 cursor-pointer hover:underline' target='_blank' rel='noopener noreferrer'>
            live
          </a>
        </div>
        <p className='leading-relaxed text-sm'>
          {Projects.description}
        </p>
        <div className='flex flex-wrap gap-4'>
          <p className='bg-[#3593f1] flex items-center px-4 py-1 rounded-md'><FaNodeJs className='text-[#fff]' size={20}/></p>
          <p className='bg-[#3593f1] flex items-center px-4 py-1 rounded-md'><SiTailwindcss className='text-[#fff]' size={20}/></p>
          <p className='bg-[#f2db88] px-4 py-1 rounded-md type'>
            {Projects.type}
          </p>
        </div>
        <div className='my-2'>
          <a 
            href={Projects.link}
            className='flex items-center gap-1 bg-[#104579] py-1 px-3 rounded-md justify-center text-[#fff] text-base cursor-pointer hover:underline' target='_blank' rel='noopener noreferrer'>
              visit website
            <FaExternalLinkAlt className='' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems