import React from 'react'
import './PortfolioItems.css'

function PortfolioItems({Projects}) {
  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className='ImgContainer'>
      <img 
        src={Projects.image}
        onClick={() => handleClick(Projects.link)}
        alt={Projects.name}
        className='block w-full mb-3 rounded-lg cursor-pointer'
      />
    </div>
  )
}

export default PortfolioItems