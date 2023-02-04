import React from 'react'
import './Footer.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <h1>Album</h1>
      </div>

      <div className='footerCenter'>
        <h1>Player</h1>
      </div>

      <div className='footerRight'>
        <h1>Volume</h1>
      </div>
    </div>
  )
}

export default Footer