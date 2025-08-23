import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { Navbar } from '../../components';

function home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Portofolio');
  }

  return (
    <Inner>
      <Navbar/>
      <section className=' my-[10px] px-[4%] min-h-[80vh] flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-5 justify-center items-center HomeContent'>
          <h1 className='text-6xl text-center'>
            <span className='text-[#F0BC02]'>Web</span>sites That Convert. Apps That Scale. Tech That Works For <span className='text-[#F0BC02]'>you</span>
          </h1>

          <p className='text-xl leading-relaxed text-center px-[7%]'>
            We help businesses, organizations, and institutions turn digital roadblocks into seamless websites, scalable apps, and smart integrations built to grow with you.
          </p>

          <button 
            onClick={handleNavigate}
            className='py-2 px-3 text-base rounded-md bg-[#104579] text-[#fff] text-center cursor-pointer'>
            View Projects
          </button>
        </div>

      </section>
    </Inner>
  )
}

export default home