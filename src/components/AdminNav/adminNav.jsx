import React, { useState, useRef, useEffect } from 'react';
import './AdminNav.css';
import LogoutBtn from '../LogoutBtn';
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { useAuth } from '../../Context/AuthContext';
import { Dimg } from '../../assets';

function AdminNav({ setActiveTab }) {
  const { userData } = useAuth(); 
  const [isOpen, setIsopen] = useState(false);
  const menuRef = useRef(null);

  const userName = userData?.username;
  const userEmail = userData?.email;
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)){
        setIsopen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className='w-full py-2 px-4 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl cursor-pointer text-[#0f0f0f]'>
            Welcome back, <span className=''>{userName}!</span>
          </h1>
        </div>

        <div className='flex gap-2 items-center'>
          <div className='flex gap-2 items-center cursor-pointer text-[#6c6b6b]'>
            <a className=''><LuDownload size={20}/></a>
            <a className=''><IoRocketOutline size={20}/></a>
            <a className=''><MdOutlineSettings size={20}/></a>
            <p className='text-[#6c6b6b]'>|</p>
          </div>
          <div className='px-2 py-1 flex gap-2 rounded-full border-2 border-[#a1a0a0]'>
            <img
              src={Dimg}
              alt='ProfilImg'
              loading='lazy'
              className='h-10 w-10 rounded-full object-cover'
            />
            <div className='flex  cursor-pointer flex-col gap-[2px] '>
              <p className='text-sm'>{userName}</p>
              <p className='text-sm'>{userEmail}</p>
            </div>
            <div className='relative inline-block text-left'
              ref={menuRef}>
                <button
                  onClick={() => setIsopen(!isOpen)}
                  className='flex items-center gap-1 px-3 py-2 bg-transparent cursor-pointer'
                  aria-label='User menu'
                  >
                    <FaChevronDown/>
                  </button>
                  {isOpen && (
                    <div 
                      className='absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#000] ring-opacity-5 z-50'
                      role='menu'
                      aria-orientation='vertical'
                    >
                      <div className='py-1'
                       role='none'>
                        <button 
                          onClick={() => {
                            setIsopen(false);
                            setActiveTab('settings')
                          }}
                          className='flex items-center w-full px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                          role='menuitem'
                          >
                            <MdOutlineSettings
                              className='mr-2'/>
                              settings
                          </button>
                          <div className='border-t bordrt-gray-200 my-1'/>
                          <LogoutBtn/>
                       </div>
                    </div>
                  )}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminNav