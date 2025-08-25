import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { Navbar } from '../../components';
import { prestige, prestige1, memories, verodah, team1 } from '../../assets';

function home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Portofolio');
  }

  return (
    <Inner>
      <Navbar/>
      <section className=' my-[10px] px-[4%] min-h-[80vh] flex flex-col justify-center items-center gap-7 overflow-hidden'>
        <div className='flex flex-col gap-5 justify-center items-center HomeContent'>
          <h1 className='text-6xl text-center'>
            <span className='text-[#F0BC02]/60'>Web</span>sites That Convert. Apps That Scale. Tech That Works For <span className='text-[#F0BC02]'>you</span>
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
        <div className=' my-[30px] grid grid-cols-3 gap-6  justify-center items-center projectContainer'>
          <a href='https://www.memories.co.ke/' className='perspective-[1000px]' target='_blank' rel='noopener noreferrer'>
            <img  className='transform skew-y-6 shadow-lg rounded-xl cursor-pointer imgPro'  src={memories} alt='Project'/>
          </a>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img  className='transform rotate-x-[20deg] rotate-y-[-10deg] shadow-lg rounded-xl cursor-pointer'  src={prestige1} alt='Project'/>
          </a>         
          <a href='https://verodahfreighters.com/' target='_blank' rel='noopener noreferrer'>
            <img  className='transform skew-y-6 shadow-lg rounded-xl cursor-pointer'  src={verodah} alt='Project'/>
          </a>       
        </div>

      </section>

      <section className='my-[2rem] bg-[#f8f8f8] rounded-t-4xl px-[4%] min-h-[40vh]'>
        <div className='grid grid-cols-[30%_70%] gap-3 p-4 About' id='About'>
          <div className='bg-transparent relative'>
            <img 
              className='top-0 left-0 h-[200px] w-[150px] rounded-md'
              src={team1}
              alt='About'/>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl leading-relaxed'>
             We craft sleek websites, SaaS platforms, and apps built to convert—powered by seamless integrations and smart SEO. The result: clean UX, reliable code, and measurable growth that lasts.
            </h1>
            <div className='grid grid-cols-[20%_60%_20%] gap-3 Acontent'>
              <div>
                <button
                  className='rounded-full border-2 bg-transparent px-4 py-2 hover:border-[#F0BC02] cursor-pointer'>
                    Overview
                </button>
              </div>
              <div className='flex flex-col gap-4'>
                <p className=' font-normal' >
                At Kodianic, we believe every great product starts with a vision. Our journey began with a simple idea: to strip away digital roadblocks and help businesses thrive online. Today, we combine strategy, design, and engineering to build solutions that don’t just look good—but perform, scale, and grow with you. 
                </p>
                <p className='font-light'>
                From conversion-focused websites and e-commerce to SaaS platforms, apps, and API integrations, our work is rooted in clean user experiences, reliable code, and measurable results. We’re not just building products—we’re building long-term digital partners for your success
                </p>
              </div>
              <a 
              onClick={handleNavigate}
              className='underline font-semibold text-[#104579] cursor-pointer text-base'>
                (01)
              </a>
            </div>
            <a 
              onClick={handleNavigate}
              className='underline font-semibold text-[#104579] cursor-pointer text-sm'>
                Get to know more
              </a>
          </div>
        </div>
      </section>
    </Inner>
  )
}

export default home