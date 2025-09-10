import React, { useState } from 'react';
import './ServicesDetails.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { Navbar, Service404, ReviewItems, Footer } from '../../components';
import services from '../../commons/Data/services';
import testimonials from '../../commons/Data/Testimonials';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";


function ServicesDetails() {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');


  const toSlug = (text) => text.trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/&/g, "and");
  
  const { heading: slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/')
  }

  const ServiceFormState = location.state?.service;

  const service = ServiceFormState || services.find((s) => toSlug(s.heading) === slug);

  const serviceName = service.heading;

  const payload = {
    Name: name,
    Phone: phone,
    Email: Email,
    Description: description,
    Budget: budget,
    ServiceName: serviceName
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
  }

  return (
    <Inner>
      <section>
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

            <div className='grid grid-cols-2 gap-3 rounded-md my-[1.5rem] mx-2 overflow-hidden bg-[#f8f8f8] reviewContent'>
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
              <div className='bg-[#fafafa] flex flex-col rounded-md gap-3 py-3 px-5'>
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
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='0793685078'
                        required
                        className='p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded bg-[#eae8e8]'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-medium flex text-[#6e6e6e] text-sm'>Your Budget (optional):</label>
                    <div className='flex gap-0 items-center'>
                      <p className='p-2 border-1 border-[#e8e7e7] text-[#757373]'>$</p>
                      <input 
                      value={budget}
                      step={1}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder={`min-amount $${service.StartPrice}`}
                      className='w-full p-2 outline-none focus:bg-[#f4f3f3] focus:border-1 focus:border-[#104579] rounded-r bg-[#eae8e8]'
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
                    className='w-full cursor-pointer  py-2 px-3 text-[#fff] rounded-md bg-[#104579]'>
                        Get a solution
                    </button>
                </form>
                <hr className='my-[2em] h-[1.5px] font-semibold shadow-2xl mx-2 bg-[#ededed]'/>
                
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl font-semibold CReview'>Customer Reviews</h1>
                  {testimonials.map((items, index) => (
                    <div 
                      key={index}>
                        <ReviewItems 
                          testimonials={items}/>
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <Footer/>
          </>
        )}
      </section>
    </Inner>
  )
}

export default ServicesDetails