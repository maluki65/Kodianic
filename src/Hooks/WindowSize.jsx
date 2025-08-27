import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  },[]);

  return { size };
};

export default useWindowSize;