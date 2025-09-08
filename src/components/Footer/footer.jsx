import React from 'react'
import './footer.css'
import { Logo } from '../../assets'
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ReactLenis } from 'lenis/react';



function footer() {
  const CurrentYear = new Date().getFullYear();

  return (
    <>
      <div className='min-h-[40vh]  mt-[1.2rem] px-[4%] overflow-hidden '>
        <div className='grid grid-cols-[40%_30%_30%] gap-3 LogosC'>
          <div className='flex flex-col gap-1 Logos'>
            <img 
            src={Logo}
            className='h-30 w-30'
            />
            <h1 className='text-2xl font-semibold'>
            We grow your business with powerful digital solutions.
            </h1>
            <div className='flex items-center gap-2 my-3'>
              <a href='https://www.instagram.com/kodianic/' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaInstagram className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
              <a href='https://www.facebook.com/Kodianic' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaFacebook className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
              <a href='https://x.com/kodianic' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaXTwitter className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
              <a  href='' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaTiktok className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
              <a  href='https://wa.me/qr/RWIHXS3AOEG6M1' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-[#104579] cursor-pointer'> <FaWhatsapp className='text-[#fff] hover:text-[#F0BC02]'  size={18}/></a>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center LogosLink'>
            <h2 className='text-[#104579] font-medium '>Quick Links</h2>
            <ul className='list-none'>
              <li className='hover:underline hover:text-[#F0BC02] cursor-pointer'> <a className='' href='#About'>About Us</a></li>
              <li className='hover:underline hover:text-[#F0BC02] cursor-pointer'> <a className='' href='#Services'>Services</a></li>
              <li className='hover:underline hover:text-[#F0BC02] cursor-pointer'> <a className='' >Blogs</a></li>
              <li className='hover:underline hover:text-[#F0BC02] cursor-pointer'> <a className='' >Our team</a></li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-center LogosLink'>
            <h2 className='text-[#104579] font-medium '>Contact Us</h2>
            <ul className='list-none'>
              <li className='flex items-center gap-2 text-wrap'> <FaLocationDot className='text-[#F0BC02]'/> Nyayo highrise along mbagathi way.</li>
              <li className='flex items-center gap-2'> <MdEmail className='text-[#F0BC02]'/> kodianic@gmail.com</li>
              <li className='flex items-center gap-2'> <FaPhoneAlt className='text-[#F0BC02]'/> +254 793 685 078</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#104579] py-2 flex items-center justify-between px-[4%] mt-3 CopyRight'>
        <p className='text-[#fff] hover:underline cursor-pointer'>&copy; {CurrentYear} <span className=''>Kodianic.inc. All rights reserved</span></p>
        <div className='flex gap-3 text-[#fff] termsF'>
          <a className='hover:underline cursor-pointer'>Terms of service</a>
          <a className='hover:underline cursor-pointer'>Privacy policy</a>
          <a className='hover:underline cursor-pointer'>Cookies</a>
        </div>
      </div>
    </>
  )
}

export default footer