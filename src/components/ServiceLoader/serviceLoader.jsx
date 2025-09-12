import React from 'react'
import './Serviceloader.css'

function serviceLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
      <SectionLoader/>
    </div>
  )
}

export default serviceLoader