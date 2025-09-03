import React from 'react'
import './LogoItems.css'

function LogoItems({Logos}) {
  return (
    <div className='flex items-center gap-2 Logos'>
      <img 
        src={Logos.logo}
        className='w-15 h-15 rounded-sm'
      />
      <p className='text-sm'>
        {Logos.name}
      </p>
    </div>
  )
}

export default LogoItems