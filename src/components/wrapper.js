import React from 'react';
import { Body } from '../components/body'
import { Socials } from '../components/social';
import './wrapper.css';

export const Wrapper = (props)=> {
  return(
    <div className='wrapper'>
      <Body/>
      <Socials/>
    </div>
  );
};