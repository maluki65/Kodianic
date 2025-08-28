import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import { Logo, LogoB, LogoS } from '../../assets';
import { FaBarsStaggered } from "react-icons/fa6";

function navbar() {
  const [menuOpen, setMenuOpen]  = useState(false);
  const [sticky, setSticky] = useState(false);

  const location = useLocation();
  const naviagte = useNavigate();

  const currentPath = location.pathname +  location.hash;

  const toggleMenu = () => {
    setMenuOpen(prev => !prev );
  };

  const closeNavBar = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handelScroll = () => {
      setSticky(window.scrollY > 0 );
    };
    window.addEventListener('scroll', handelScroll);
    return () => window.removeEventListener('scroll', handelScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.PageLinks');
    links.forEach(link => {
      link.addEventListener('click', closeNavBar);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeNavBar);
      });
    }
  }, []);

  const handelScroll = (id) => {
    if (location.pathname !== '/') {
      naviagte('/#' + id);
    } else {
      const element = document.getElementById(id);
      if(element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  },[location]);

  const NavLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#About' },
    { name: 'Portofolio', link: '/Portofolio' },
    { name: 'Contact', link: '#contact' }
  ]
  return (
    <>
      <div className={`py-1 px-[3%] flex items-center justify-between top-0 z-[1000]  w-[100%] ${sticky ? 'backdrop-blur-[20px] bg-[rgb(238,236,236)]' : ''} navbar`}>
        <div className=''>
          <img src={LogoB} className='h-[60px] w-[60px]' alt='Kodianic'/>
        </div>

        <div className='collaboration'>
          <li className='text-sm underline font-semibold cursor-pointer hover:text-[#104579]'>
            Open for collaboration
          </li>
        </div>

        <div className={`navlinks ${menuOpen ?  'open' : ''}`}>
          <ul className='list-none flex'>
            {NavLinks.map((item, index) => {
              const isActive = currentPath === item.link || location.pathname === item.link;

              return (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className={`PageLinks ${isActive ? 'text-[#F0BC02]' : ''} ml-[1.5rem] duration-300 text-[#104579] ease-in-out text-base`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className=''>
          <p className='text-sm underline font-semibold cursor-pointer hover:text-[#104579]'>
            Discuss a project
          </p>
        </div>

        <div className="hambuger" id="hambuger" onClick={toggleMenu}>
          <FaBarsStaggered/>
        </div>
      </div>
    </>
  )
}

export default navbar