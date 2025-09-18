import React, { useState } from 'react';
import './AdminSidebar.css';
import { useLogout } from '../../Hooks/useLogout';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MdOutlineDashboard, MdConnectWithoutContact, MdOutlineSettings, MdOutlineDesignServices, MdLogout  } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";


function AdminSidebar({ activeTab, setActiveTab, open, setOpen, id }) {

  const logout = useLogout();
  const handleLogout = async () => {
    try {
      await logout();
      console.log('Use logged out successfully');
    } catch (error) {
      console.log('Logout failed', error);
    }
  };

  const menus = [
    {name: 'Dashboard', icon: MdOutlineDashboard },
    {name: 'Contacts', icon: MdConnectWithoutContact, margin: true },
    {name: 'Service requests', icon: MdOutlineDesignServices, margin: true },
    {name: 'Settings', icon: MdOutlineSettings, margin: true },
  ]

  const major = [
    {name: 'Help', icon: IoHelpCircleOutline  },
    {name: 'Logout', icon: MdLogout, onClick: handleLogout },
  ]

  

  return (
    <>
      <div className={`bg-[#c3c2c0] min-h-screen flex flex-col justify-evenly fixed sidebar ${open ?  'w-60' : 'w-16'} duration-500 px-4`}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={20}
            className='cursor-pointer text-[#3e3e3e]'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, index) => (
            <Link
              to={menu?.link || '#'}
              onClick={() => setActiveTab(menu.name)}
              key={index}
              className={`${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#F0BC02] rounded-md`}
              >
                <div className='text-[#000]'>
                  {React.createElement(menu?.icon, {size: '20'})}
                </div>
                <h2
                  style={{
                    transitionDelay: `${index + 3}00ms`
                  }}
                  className={`whitespace-pre text-[#000] duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} >
                     {menu?.name}
                  </h2>
                  <h2
                    className={`${open && 'hidden'} absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shasow-lg px-0 y-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                      {menu?.name}
                    </h2>
              </Link>
          ))}
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {major?.map((menu, index) => (
            <Link
              to={menu?.link || '#'}
              onClick={(e) => {
                if (menu.onClick) {
                  e.preventDefault();
                  menu.onClick();
                } else {
                  setActiveTab(menu.name);
                }
              }}
              key={index}
              className={`${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#F0BC02] rounded-md`}
              >
                <div className='text-[#000]'>
                  {React.createElement(menu?.icon, {size: '20'})}
                </div>
                <h2
                  style={{
                    transitionDelay: `${index + 3}00ms`
                  }}
                  className={`whitespace-pre text-[#000] duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} >
                     {menu?.name}
                  </h2>
                  <h2
                    className={`${open && 'hidden'} absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shasow-lg px-0 y-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                      {menu?.name}
                    </h2>
              </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AdminSidebar