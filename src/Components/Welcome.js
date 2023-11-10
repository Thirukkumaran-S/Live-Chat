import React from 'react'
import image from '../Images/live-chat.png';

function Welcome() {
  return (
    <div className='welcome-container'>
       <img src={image}  alt='Image' className='welcome-logo'/> 
       <p>View and text directly to people in the chat rooms.</p>
    </div>
  )
}

export default Welcome