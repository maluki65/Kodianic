import React, { useRef, Fragment } from 'react';
import './home.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Inner } from '../../commons';
import { Navbar, ServicesItem } from '../../components';
import services from '../../commons/Data/services';
import { prestige, prestige1, memories, verodah, team1 } from '../../assets';
import useWindowSize from '../../Hooks/WindowSize';

function home() {
  const navigate = useNavigate();
  const { size } = useWindowSize();
  const targetRef = useRef(null);

  const { scrollY } = useScroll();
  const titleHeight = 1600; 
  const cardPadding = 80;
  const cardMargin = 0;  //208  and h-52
  
  const cardTimeLine = services.map((_, i) => {
    const start = titleHeight + i * window.innerHeight + cardPadding + (i + 1) * cardMargin;
    const end = titleHeight + (i + 1) * window.innerHeight + cardPadding + (i + 1) * cardMargin;
    return [start, end];
  });
  
  const timeline = [[0, titleHeight], ...cardTimeLine];
  
  const animation = timeline.map(([start, end]) => ({
    scale: useTransform(scrollY, [start, end], [1, 0.8]),
    opacity: useTransform(scrollY, [start, end], [1, 0]),
  }));

  const handleNavigate = () => {
    navigate('/Portofolio');
  }


  return (
    <Inner>
      <Navbar/>
      <section className=' my-[10px] px-[4%] min-h-[80vh] flex flex-col justify-center items-center gap-7 overflow-hidden'>
        <div className='flex flex-col gap-5 justify-center items-center HomeContent'>
          <h1 className='text-6xl text-center'>
            <span className='text-[#F0BC02]/60'>Web</span>sites That Convert. Apps That Scale. Tech That Works For <span className='light'>you</span>
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

      <section className='my-[2rem] bg-[#f8f8f8]  rounded-t-4xl px-[4%] min-h-[40vh]'>
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

      <ReactLenis root>
      <section className='my-[2rem] px-[4%] min-h-[200vh] services' id='Services'>
        <div ref={targetRef} className='relative'>
          <motion.div className='h-[300px] sticky top-0 flex text-8xl lg:text-[160px] uppercase lg:leading-[140px] px-36 SText'
           style={{scale:animation[0].scale, opacity: animation[0].opacity}}>
            <h1 className='w-full h-max'>
              Our <br/>
              <span className='ml-20 lg:ml-52'>services</span>
            </h1>
          </motion.div>

            {services.map((item, index) => (
                <Fragment key={index}>
                  <motion.div 
                  style={{
                    scale:animation[index + 1]?.scale,
                    opacity:animation[index + 1]?.opacity,
                    }}
                   className='h-screen py-20 sticky top-0'>
                    <ServicesItem
                      service={item}
                    />
                  </motion.div>
                  <div className='0'/>
                </Fragment>
            ))}
            <div className='h-dvh'/>
        </div>
      </section>
      </ReactLenis>
    </Inner>
  )
}

export default home