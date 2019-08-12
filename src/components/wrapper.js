import React from 'react';
import { Body } from '../components/body'
import { Socials } from '../components/social';
import { Description } from '../components/description';
import './wrapper.css';

export const Wrapper = (props)=> {
  return(
    <div className='wrapper'>
      <Body/>
      <Description/>
      <Socials/>
    </div>
  );
};