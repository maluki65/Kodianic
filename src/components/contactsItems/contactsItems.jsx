import React, { useState, useMemo } from 'react';
import './contactsItems.css';
import { blue, cap, cloud, pink, gojo, mount, tree, Earth } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

function contactsItems({contact}) {
  const [copied, setCopied] = useState(false);
  const [Pcopied, setPCopied] = useState(false);


  {/*const getImageForClient = (name) => {
    const firstLetter = name[0].toLowerCase();
    if ('abcde'.includes(firstLetter)) return blue;
    if ('fghij'.includes(firstLetter)) return cloud;
    if ('klmno'.includes(firstLetter)) return mount;  
    if ('pqrst'.includes(firstLetter)) return tree;
    if ('vwxyxz'.includes(firstLetter)) return Earth;
    return pink;
  }*/}
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.Email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handlePhone = async () => {
    try {
      await navigator.clipboard.writeText(contact.phone);
      setPCopied(true);
      setTimeout(() => setPCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };


  return (
    <AnimatePresence mode='wait'>
      <motion.div className='p-2 bg-[#fff] rounded-md flex flex-col gap-1'
        key='clients'
        initial={{ opacity: 0, scale: 1}}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95}}
        transition={{ duration: 0.3 }}
        >
          {/*<img 
            src={getImageForClient(contact.name)}
            loading='lazy'
            alt={contact.name}
            className='h-[30%] w-full object-cover rounded-md'
          />*/}
          <div className='my-[20px] flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <img 
                src={gojo}
                loading='lazy'
                alt={contact.name}
                className='h-10 w-10 object-cover rounded-full'
              />
              <h1 className='font-semibold text-base tracking-wide leading-relaxed'>{contact.name}</h1>
            </div>
            <p className="rounded-full px-2 py-1 border my-1.5 flex items-center justify-between gap-1 bg-[#e5e4e4] w-full">
              {contact.phone}
              {Pcopied ? (
                <FaCheck className="text-[#F0BC02] text-lg" />
              ) : (
                <button
                  onClick={handlePhone}
                  className="px-3 py-1 cursor-pointer bg-[#104579] rounded-full text-[#fff] hover:bg-[#08355c] transition"
                >
                  Copy
                </button>
              )}
            </p>
            <p className="rounded-full px-2 py-1 border my-1.5 flex items-center justify-between gap-1 bg-[#e5e4e4] w-full">
              {contact.Email}
              {copied ? (
                <FaCheck className="text-[#F0BC02] text-lg" />
              ) : (
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 cursor-pointer bg-[#104579] rounded-full text-[#fff] hover:bg-[#08355c] transition"
                >
                  Copy
                </button>
              )}
            </p>
            <div className="my-[2px] overflow-hidden " id='FAQ'>
              <details className="group [&_summary::-webkit-details-marker]:hidden transition ease-in duration-700 ">
                  <summary
                      className="flex items-center justify-between gap-1.5 rounded-md p-4"
                  >
                      <h2 className="text-medium   cursor-pointer text-[#000] hover:underline font-semibold">What Service description</h2>

                      <svg
                      className="size-5 shrink-0 transition-transform cursor-pointer duration-300 text-[#000] group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                  </summary>

                  <p className="px-4 pt-4  text-[#000]">
                    {contact.description}
                  </p> 
              </details>
            </div>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default contactsItems