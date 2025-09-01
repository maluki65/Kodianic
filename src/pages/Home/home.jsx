import React, { useRef, Fragment } from 'react';
import './home.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Inner } from '../../commons';
import { Navbar, ServicesItem } from '../../components';
import services from '../../commons/Data/services';
import Projects from '../../commons/Data/Projects';
import { IconsItems, ProjectItems } from '../../components';
import Icons from '../../commons/Data/Icons';
import { team1, global, global01, global02, global03 } from '../../assets';
import useWindowSize from '../../Hooks/WindowSize';
import { SiVite, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaArrowRight } from "react-icons/fa";


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
      <section className=' relative my-[10px] px-[4%] min-h-[90vh] flex flex-col justify-center  gap-7 overflow-hidden'>
        <div className='flex flex-col gap-5 justify-center items-center HomeContent'>
          <h1 className='text-6xl text-center'>
            <span className='text-[#F0BC02]/60'>Web</span>sites That Convert. Apps That Scale. Tech That Works For <span className='light'>you</span>
          </h1>

          <p className='text-xl leading-relaxed text-center px-[7%]'>
            We help businesses, organizations, and institutions turn digital roadblocks into seamless websites, scalable apps, and smart integrations built to grow with you.
          </p>

          <button 
            onClick={handleNavigate}
            className='py-2 px-3 text-base rounded-md bg-[#104579] text-[#fff] text-center cursor-pointer hover:bg-transparent hover:border-1 hover:text-[#000] hover:border-[#F0BC02]'>
            Discover Our Portfolio
          </button>

          <div className='grid grid-cols-2 gap-2 items-center justify-between Profiles'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#3a3a3a] text-base leading-relaxed cursor-pointer'>
                A global partner for founders and innovators.
              </p>
              <div className='flex items-center space-x-1 my-2'>
                    <div className='flex -space-x-2'>
                      <img src={global} alt='user1' className='w-15 h-15 rounded-full border-2 border-white'/>
                      <img src={global01} alt='user2' className='w-15 h-15 rounded-full border-2 border-white'/>
                      <img src={global02} alt='user3' className='w-15 h-15 rounded-full border-2 border-white'/>
                      <img src={global03} alt='user3' className='w-15 h-15 rounded-full border-2 border-white'/>
                      <div className='w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-700 divPlus'>
                        +20
                      </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 HIcons'>
              <p className='flex items-center gap-2 text-[#6a6868]'><SiVite size={25}/>Vite </p>
              <p className='flex items-center gap-2 text-[#6a6868]'><FaReact size={25}/>React</p>
              <p className='flex items-center gap-2 text-[#6a6868]'><SiTailwindcss  size={25}/>Tailwindcss</p>
              <p className='flex items-center gap-2 text-[#6a6868]'><TbBrandFramerMotion size={25}/>Framer Motion</p>
            </div>
          </div>
        </div>
        {/*<div className=' my-[30px] grid grid-cols-3 gap-6  justify-center items-center projectContainer'>
          <a href='https://www.memories.co.ke/' className='perspective-[1000px]' target='_blank' rel='noopener noreferrer'>
            <img  className='transform skew-y-6 shadow-lg rounded-xl cursor-pointer imgPro'  src={memories} alt='Project'/>
          </a>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img  className='transform rotate-x-[20deg] rotate-y-[-10deg] shadow-lg rounded-xl cursor-pointer'  src={prestige1} alt='Project'/>
          </a>         
          <a href='https://verodahfreighters.com/' target='_blank' rel='noopener noreferrer'>
            <img  className='transform skew-y-6 shadow-lg rounded-xl cursor-pointer'  src={verodah} alt='Project'/>
          </a>       
        </div>*/}
      </section>

      <section className='my-[2rem] bg-[#f8f8f8] flex flex-col gap-4 rounded-4xl px-[4%] min-h-[40vh] overflow-hidden' id='About'>
        <div className='grid grid-cols-[30%_70%] gap-3 p-4 About' >
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
                Our team specializes in crafting conversion-focused websites, e-commerce solutions, SaaS platforms, apps, and API integrations. Every project is powered by clean user experiences, reliable code, and measurable results.More than just building products, we’re forging long-term digital partnerships for your success.
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
              className='underline font-semibold text-[#104579] cursor-pointer text-sm hover:text-[#F0BC02]'>
                Get to know more
              </a>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-3 my-4 py-5 MapIcons'>
          {Icons.map((items, index) => {
             return (
              <div key={index}>
                <IconsItems
                  Icons={items}
                /> 
              </div>
            );
          })}
        </div>
      </section>

      <ReactLenis root>
        <section className='my-[2rem] px-[4%] min-h-[200vh] flex services' id='Services'>
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
              <div className='h-[30vh]'/>
          </div>
        </section>
      </ReactLenis>

      <section className='my-[1rem] px-[4%] py-[1.5rem] min-h-[80vh] overflow-hidden'>
        <div className='grid grid-cols-[20%_50%_30%] gap-2 h-fit justify-center items-center Pprojects'>
         <div className='w-fit flex items-end'>
          <h2 className='rounded-full border-2 bg-transparent px-4 py-1 hover:border-[#F0BC02] cursor-pointer '>Projects</h2>
         </div>
         <h1 className='text-5xl H1Project'>
           Transforming businesses through digital strategy and user experience
          </h1>  
         <div className='flex flex-col gap-2 justify-end'>
          <p className='text-[#F0BC02]'>(03)</p>
          <p className=''>
           Transformations that speak for themselves, proving the power of strategy and design.
          </p> 
         </div>   
        </div>

        <div className='grid grid-cols-3 gap-2 mt-[2rem] PpCard'>
          {Projects.slice(0, 3).map((items, index) => (
            <div 
              key={index}>
              <ProjectItems
                 Projects={items}
                />
            </div>
          ))}
        </div>

        <a 
        onClick={handleNavigate}
          className='flex items-center gap-2 mt-2 cursor-pointer text-[#104579] hover:underline hover:text-[#F0BC02] justify-end'
          >
            view more  <span><FaArrowRight/></span>
          </a>
      </section>
    </Inner>
  )
}

export default home