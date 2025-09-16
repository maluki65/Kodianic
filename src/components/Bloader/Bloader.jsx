import React from 'react';
import './Bloader.css';

function Bloader() {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-white/60 z-10'>
      <div className="spinner"></div>
    </div>
  )
}

export default Bloader