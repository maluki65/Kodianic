import React from 'react';
import './ServicesDetails.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { Navbar, Service404 } from '../../components';
import services from '../../commons/Data/services';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";


function ServicesDetails() {
  const toSlug = (text) => text.trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/&/g, "and");
  
  const { heading: slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/')
  }

  const ServiceFormState = location.state?.service;

  const service = ServiceFormState || services.find((s) => toSlug(s.heading) === slug);

  return (
    <Inner>
      <section >
        <Navbar/>
        {!service ? (
          <Service404/>
        ): (
          <>
            <a 
             onClick={handleNavigate}
             className='text-[#104579] flex items-center gap-2 p-[2%] cursor-pointer hover:underline'>
              <FaArrowLeft/> {service.heading}
            </a>

            <div className='grid grid-cols-2 gap-3 rounded-md shadow-md my-[1.5rem] mx-2'>
              <div className='flex flex-col gap-2 border-r-1 border-[#e9e7e7]'>
                <img 
                  src={service.address}
                  className='h-[50%] object-cover rounded-tl-2xl'
                />
                <div className='flex flex-col gap-2 p-3'>
                  <div className='flex justify-between my-4'>
                    <p className='py-1 px-3 rounded-full bg-[#91c2f3] text-[#194579]'>{service.form}</p>
                    <h2 className='text-[#194579] text-base font-semibold'>${service.StartPrice} - ${service.EndPrice}</h2>
                  </div>
                  <h1 className='text-xl font-bold'>{service.heading}</h1>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold'>Description</h3>
                    <p className='leading-relaxed'>{service.ServiceDetail}</p>
                  </div>

                  <h1 className='font-semibold text-[#141414] my-3'>Price Plan</h1>

                  <div className='flex flex-col gap-2'>
                   <div className='flex flex-col gap-2 px-4'>
                    <div className='flex justify-between'>
                     <h1 className='font-semibold text-[#414040]'>Basic Plan</h1>
                     <h1 className='font-semibold text-[#414040]'>{service.BPrice}</h1>
                    </div>
                    <ul className='list-none'>
                      {service.Basic.map((items, index) => (
                        <li key={index}
                        className='flex gap-2 items-center text-[#212121]'><IoMdCheckmark className='text-[#104579]'/>
                          {items}
                        </li>
                      ))}
                    </ul>
                   </div>
                  </div>

                  <div className='lex flex-col gap-2'>
                    <div className='flex flex-col gap-2 px-4'>
                      <div className='flex justify-between'>
                        <h1 className='font-semibold text-[#414040]'>Standard Plan</h1>
                        <h1 className='font-semibold text-[#414040]'>{service.SPrice}</h1>
                      </div>
                      <ul className='list-none'>
                        {service.Standard.map((items, index) => (
                          <li 
                           key={index}
                           className='flex gap-2 items-center text-[#2f2e2e]'><IoMdCheckmark className='text-[#104579]'/>
                            {items}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='lex flex-col gap-2'>
                    <div className='flex flex-col gap-2 px-4'>
                      <div className='flex justify-between'>
                        <h1 className='font-semibold text-[#414040]'>Advanced Plan</h1>
                        <h1 className='font-semibold text-[#414040]'>{service.APrice}</h1>
                      </div>
                      <ul className='list-none'>
                        {service.Advanced.map((items, index) => (
                          <li 
                           key={index}
                           className='flex gap-2 items-center text-[#2f2e2e]'><IoMdCheckmark className='text-[#104579]'/>
                            {items}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Inner>
  )
}

export default ServicesDetails