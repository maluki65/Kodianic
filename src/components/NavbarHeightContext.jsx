import React, { createContext, useContext, useRef, useLayoutEffect, useState, Children } from "react";
import { Navbar } from ".";

const NavbarHeightContext = createContext(0);

export function NavbarHeightProvider({ children }) {
  const navbarRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setHeight(navbarRef.current.getBoundingClientRect().height);

      const handleResize = () => {
        setHeight(navbarRef.current.getBoundingClientRect().height);
      };
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <NavbarHeightContext.Provider value={height}>
      <div ref={navbarRef} className='navbar'>
        <Navbar/>
      </div>
      {children}
    </NavbarHeightContext.Provider>
  );
}

export function useNavbarHeight(){
  return useContext(NavbarHeightContext);
}