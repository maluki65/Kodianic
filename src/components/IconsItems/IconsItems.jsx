import React from 'react'
import './IconsItems.css'

function IconsItems({Icons}) {
  const Icon = Icons.icon;

  return (
    <div className='py-6 px-3 flex gap-2 items-center justify-center text-2xl border-1 border-[#b0afaf] rounded-md cursor-pointer CIcons'>
      <Icon className='dark AIcon' size={28}/>
      <span className=''>{Icons.name}</span>
    </div>
  )
}

export default IconsItems