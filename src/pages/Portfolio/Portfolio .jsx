import React from 'react';
import './Portfolio .css';
import { Navbar, PortfolioItems } from '../../components';
import { Inner } from '../../commons';
import Projects from '../../commons/Data/Projects';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Portfolio () {
  return (
    <Inner>
      <Navbar/>
      <section className='min-h-[10vh] my-[10px] px-[4%] overflow-hidden Portfolio'>
        <h1 className='text-3xl my-[1.5rem] text-[#939191] w-[50%]'>Browse through Kodianic’s collection of creative works that reflect our commitment to quality and client success</h1>
        <a className='text-xl text-[#222222] cursor-pointer underline font-semibold'>All Projects</a>
      </section>
      <section className='px-[4%] py-[1.5em] mt-[1.5em] min-h-[60vh] bg-[#edebeb] rounded-t-3xl overflow-hidden'>
        <div className='w-full max-w-[1000px] mx-auto my-3 columns-4 gap-x-3 CImgs'>
         {Projects.map((items, index) => (
           <a 
             key={index}>
             <PortfolioItems 
               Projects={items}
             />
             </a>
          ))}
        </div>
        <div className='flex items-center justify-between mt-[4rem] PIcons'>
          <p className='text-[#104579] hover:text-[#F0BC02] cursor-pointer'>Designed and made by <span className='underline text-[#F0BC02] hover:text-[#104579]'>Kodianic</span></p>
          <div className='flex items-center gap-2 my-3'>
            <a href='https://www.instagram.com/kodianic/' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaInstagram className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
            <a href='https://www.facebook.com/Kodianic' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaFacebook className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
            <a href='https://x.com/kodianic' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaXTwitter className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
            <a  href='' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaTiktok className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
            <a  href='https://wa.me/qr/RWIHXS3AOEG6M1' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaWhatsapp className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
          </div>
        </div>
      </section>
    </Inner>
  )
}

export default Portfolio 