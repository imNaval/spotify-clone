import React from 'react'
import './Footer.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { SkipNextOutlined } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <img className='albumLogo' src='https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZR6q4035/size_m_1629048201.jpg' alt='albumLogo' />
        <div className='songInfo'>
        <h4>songgg</h4>
        <p>rererere</p>
        </div>
      </div>

      <div className='footerCenter'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='skip' />
        <PlayCircleOutlineIcon className='play' fontSize='large' />
        <SkipNextIcon className='skip' />
        <RepeatIcon className='footer_green' />
      </div>

      <div className='footerRight'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
            {/* aria-labelledby='continuous-slide' */}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer