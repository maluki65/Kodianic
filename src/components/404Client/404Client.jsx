import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ErrClient.css';
import fadeIn from '../../commons/variants';


function ErrClient() {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/', { state: { scrollTo: '#Services' } })
  }

  return (
    <section className='h-[50vh] p-[4%] my-[1em] flex overflow-hidden' >
      <motion.div className='flex flex-col items-center justify-center text-center h-full w-full'
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.7}}
       >
        <FaCircleUser  className='text-red-600 text-[100px] ErroIcon'/>
        <h1 className='text-[#a5a0a0] text-2xl  my-[10px] ErroH1'>
           Client doesn't exist
        </h1>
        <button className='transition-transform duration-300 hover:border-1 w-fit h-fit px-4 py-1 my-[10px] text-[#fff]  bg-[#104579] rounded-[10px] cursor-pointer  btn1' onClick={handleHome}>
          Return Home
        </button>
      </motion.div>
    </section>
  )
}

export default ErrClient