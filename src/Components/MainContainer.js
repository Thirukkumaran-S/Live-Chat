import React from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import Workarea from './WorkArea'

function MainContainer() {
  return (
    <div className='main-container'>
      <Sidebar/>
      <Workarea/>
       
      </div>
  )
}

export default MainContainer