import React from 'react';
import './home.css';
import { Inner } from '../../commons';
import { Navbar } from '../../components';

function home() {
  return (
    <Inner>
      <Navbar/>
      <div className='text-red-600'>home</div>
    </Inner>
  )
}

export default home