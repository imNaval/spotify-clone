import React from 'react'
import Body from './playerComponents/Body/Body'
import Sidebar from './playerComponents/Sidebar/Sidebar'
import './Player.scss'
import Footer from './playerComponents/Footer/Footer'

const Player = ({ spotify }) => {
  return (
    <div className='player'>
        <h1>welcome to Spotify</h1>
        <div className='playerBody'>
          <Sidebar />
          <Body />
        </div>
        <Footer />
    </div>
  )
}

export default Player