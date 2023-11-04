import React from 'react'
import './myStyles.css'

function ChatArea() {
  return (
    <div className='chatarea-container'>
       <div className='chatarea-header'>ChatArea-Header</div>
       <div className='messages-container'>Messages Container</div>
       <div className='text-input-area'>text-input-area</div>
    </div>
  )
}

export default ChatArea