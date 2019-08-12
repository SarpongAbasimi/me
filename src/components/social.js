import React from 'react';
import './social.css';
import { account } from './socialAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const Socials = ()=>{
  return(<div className='socials'>
  <a id ='ghub' href={account.gitHub}><FontAwesomeIcon icon={faGithub} className='github'/></a>
  <a id='lkin' href={account.linkedIn}><FontAwesomeIcon icon={faLinkedinIn}  className='github'/></a>
  </div>);
}

