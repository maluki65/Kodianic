import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white/80 z-[9999]'>
      <div className="spinner"></div>
    </div>
  )
}

export default Loader
