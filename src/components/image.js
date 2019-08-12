import React from 'react';
import './image.css';

export const Image = (props)=> {
  return(
    <div className='imageContainer'>
      <img src='static/myImage.jpg' alt='myPicture'/>
    </div>
  );
};