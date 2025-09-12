import React, { useRef, Fragment, useState } from 'react';
import './home.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Inner } from '../../commons';
import { Navbar, ServicesItem, IconsItems, ProjectItems, TestimonialItems, LogoItems, Footer, Loader } from '../../components';
import services from '../../commons/Data/services';
import Projects from '../../commons/Data/Projects';
import testimonials from '../../commons/Data/Testimonials';
import Logos from '../../commons/Data/Logos';
import Icons from '../../commons/Data/Icons';
import { team1, global, global01, global02, global03 } from '../../assets';
import useWindowSize from '../../Hooks/WindowSize';
import { SiVite, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaArrowRight, FaServer, FaHandshake, FaPhoneAlt  } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import axios from 'axios';


function home() {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSucces] = useState('');

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
    navigate('/Portfolio');
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault() 
    setIsLoading(true)

    try {
      const payload = {
        name,
        phone,
        Email,
        description
      };

      console.log(payload);
      
      await axios.post('http://localhost:5000/v1/api/contactUs', payload);
      //await new Promise((resolve) => setTimeout(resolve, 5000));

        setIsLoading(false);
        setSucces('Form submitted successfully!. You will be contacted within 2 working days');

        setName('');
        setPhone('');
        setEmail('');
        setDescription('');

        setTimeout(() => {
          setSucces('')
        }, 5000);

    } catch (error) {
      setIsLoading(false);
      console.error('Error sending data:', error);
      setError('Error submitting form, please try again or contact support');
      setTimeout(() => {
        setError('')
      }, 5000);
    }
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
          <p className='gap-2'>
           Transformations that speak for themselves, proving the power of strategy and design.<span className=''>
            <a 
              onClick={handleNavigate}
              className='flex items-center gap-2 mt-2 cursor-pointer text-[#104579] hover:underline hover:text-[#F0BC02] justify-end'
                >
                  view more  <span><FaArrowRight/></span>
            </a>
           </span>
          </p> 
         </div>  
          
        </div>

        <div className='grid grid-cols-3 gap-2 mt-[2.5rem] PpCard'>
          {Projects.slice(0, 3).map((items, index) => (
            <div 
              key={index}>
              <ProjectItems
                 Projects={items}
                />
            </div>
          ))}
        </div>
      </section>

      <section className='m-[5px] px-[4%] py-[1.5em] min-h-[80vh] overflow-hidden bg-[#104579] rounded-md why'>
        <h2 className='text-[#F0BC02] flex flex-col gap-1'>(04) <span className='text-sm text-[#F0BC02]'>
          / Why kodianic?
        </span></h2>

        <div className='grid grid-cols-2 gap-3 items-center justify-center Wtitle'>
          <div className='flex flex-col justify-between p-4 gap-2 h-full'>
            <h1 className='w-full text-6xl text-[#fff]'>
              Shaping Digital Success
            </h1>
            <p className='text-base leading-relaxed font-normal text-[#bcbbbb]'>
             For over two years, we’ve been a trusted digital partner, proudly serving businesses in Kenya and beyond. Through consistent delivery, reliable support, and a commitment to excellence, we’ve earned the confidence of our community while helping brands grow, adapt, and thrive in a fast-changing digital world.
            </p>

            <div className='flex items-center gap-4'>
             <a  
               href='#Contact' 
               className='flex  items-center text-[#F0BC02] cursor-pointer hover:underline'>Book a call <span><IoChevronForward/></span>
              </a>
              <a  
               href='#Contact' 
               className='flex items-center text-[#F0BC02] cursor-pointer hover:underline'>Schedule a metting <span><IoChevronForward/></span>
              </a>
            </div>
          </div>
          <div className='grid grid-cols-2 pt-[12px] gap-2 px-2 items-center justify-start h-full wP'>
            <div className='flex flex-col gap-3 border-r-2 border-r-[#fff] Wborder'>
              <div className='flex flex-col gap-2'>
               <h2 className='flex items-center text-xl gap-1 text-[#F0BC02]'> <TbTargetArrow /> <span className=''>
                Strategic Focus
               </span></h2>
               <p className='text-[#FFF] text-sm'>
                Every project begins with a deep understanding of your objectives, ensuring our solutions align with your business outcomes.
               </p>
               <hr className='my-[2px] h-[1.5px] font-semibold shadow-2xl mx-2 bg-[#f8f6f6]'/>
              </div>

              <div className='flex flex-col gap-3 '>
               <h2 className='flex items-center text-xl gap-1 text-[#F0BC02]'> <FaServer/> <span className=''>
                Reliable Technology
               </span></h2>
               <p className='text-[#FFF] text-sm '>
                 We use proven frameworks and scalable systems to deliver digital products that stand the test of time.
               </p>
              </div>              
            </div>

            <div className='flex flex-col gap-3 top-0'>
              <div className='flex flex-col gap-2'>
               <h2 className='flex items-center text-xl gap-1 text-[#F0BC02]'> <LuLayoutPanelLeft /> <span className=''>
                User-Centered Design
               </span></h2>
               <p className='text-[#FFF] text-sm'>
                Our designs are intuitive, accessible, and tailored to enhance customer engagement across all touchpoints.
               </p>
               <hr className='my-[2px] h-[1.5px] font-semibold shadow-2xl mx-2 bg-[#f8f6f6]' />
              </div>

              <div className='flex flex-col gap-3 '>
               <h2 className='flex items-center text-xl gap-1 text-[#F0BC02]'> <FaHandshake /> <span className=''>
                Long-Term Partnership
               </span></h2>
               <p className='text-[#FFF] text-sm '>
                 We build more than products — we build relationships, offering ongoing support and continuous improvement.
               </p>
              </div>              
            </div>
          </div>
        </div>
      </section>

      <ReactLenis root>
        <section className='my-[1rem] px-[4%] py-[1.5rem] min-h-[70vh] flex flex-col gap-2 items-center justify-center overflow-hidden testimonials'>
          <div className='w-full TesHeading'>
            <h1 className='text-5xl w-[60%]'>
              Loved by businesses, and <br/> individuals across the globe.
            </h1>
          </div>
          <div className='my-4 grid grid-cols-3 gap-4 items-center justify-center TesCard'>
            {testimonials.map((items, index) => (
              <div 
                key={index}>
                  <TestimonialItems
                    testimonials={items}
                  />
                </div>
            ))}
          </div>
          <div className='grid grid-cols-[70%_30%] gap-4 justify-start TesCard'>
            <div className='grid grid-cols-4 gap-2 items-center justify-center TesLogs'>
              {Logos.map((items, index) => (
                <div 
                  key={index}>
                  <LogoItems
                    Logos={items}
                  />
                </div>
              ))}
            </div>
            <p className=' text-base'>
              Reach us at +254 793 685078 to get started, or <span onClick={handleNavigate} className='underline text-[#F0BC02] cursor-pointer'>explore our portfolio</span> to see what we’ve built
            </p>
          </div>
        </section>
      </ReactLenis>

      
        <section className='my-[1rem] px-[4%] min-h-[70vh] bg-[#f7f7f7] flex justify-center items-center overflow-hidden Contact' id='Contact'>
          {isloading ? (
            <Loader/>
          ): (
            <div className='grid grid-cols-2 gap-3 Ccontainer'>
              <div className='flex flex-col gap-2 space-y-2'>
                <h2 className='text-[#6e6e6e] text-sm'>
                  WE'RE HERE TO HELP YOU
                </h2>
                <h1 className='text-5xl'>Let’s <span className=' font-semibold'>discuss</span> <br/> your technology needs.</h1>
                <p className='text-base text-[#6e6e6e]'>
                  Need solutions created with your unique needs in mind? We’re here to help—connect with us today.
                </p>
                <div className='flex items-center gap-2'>
                  <MdEmail className='text-[#104579]' size={30}/>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-[#6e6e6e] text-sm'>
                      E-mail
                    </h3>
                    <p className='text-[#444444] '>
                    kodianic@gmail.com
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <FaPhoneAlt className='text-[#104579]' size={30}/>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-[#6e6e6e] text-sm'>
                      Phone number
                    </h3>
                    <p className='text-[#444444] '>
                    +254 793685078
                    </p>
                  </div>
                </div>
              </div>
              <div className='shadow-md rounded-md bg-[#fff] py-3 px-4'>
                {/*On success or Error*/}
                <div className='my-4 flex flex-col gap-2'>
                  {success && (
                    <div className="text-green-600 bg-green-100 border border-green-400 p-2 rounded mb-3">
                      {success}
                    </div>
                  )}

                  {error && (
                    <div className="text-red-600 bg-red-100 border border-red-400 p-2 rounded mb-3">
                      {error}
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-3 ContactForm'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-medium flex text-[#6e6e6e] text-sm'>Name:</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='John Smith'
                    required
                    className='p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded bg-[#eae8e8]'
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-2 items-center w-full inputC'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-medium flex text-[#6e6e6e] text-sm'>E-mail:</label>
                    <input 
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@gmail.com'
                    required
                    className='p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded bg-[#eae8e8]'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-medium flex text-[#6e6e6e] text-sm'>Phone number:</label>
                    <input 
                    value={phone}
                    type='number'
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='0793685078'
                    required
                    className='p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded bg-[#eae8e8]'
                    />
                  </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-medium flex text-[#6e6e6e] text-sm'>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    placeholder='Description'
                    required
                    className='p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded bg-[#eae8e8]'
                    />
                  </div>
                  <button 
                    className='w-fit flex cursor-pointer items-center gap-3 py-2 px-3 text-[#fff] rounded-full bg-[#104579]'>
                      <span className='bg-[#fff] text-[#104579] p-2 rounded-full'>
                      <FaArrowRight/>
                      </span> 
                        Get a solution
                    </button>
                </form>
              </div>
            </div>
          )}
        </section>

      <Footer/>
    </Inner>
  )
}

export default home