import React from 'react';
import { Body } from '../components/body'
// import { Image } from '../components/image';
import './wrapper.css';

export const Wrapper = (props)=> {
  return(
    <div className='wrapper'>
      {/* <Image/> */}
      <Body/>
    </div>
  );
};