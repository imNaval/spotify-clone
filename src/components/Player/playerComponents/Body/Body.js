import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
import React from 'react'
import { useDataLayerValue } from '../../../../DataLayer'
import './Body.scss'
import Header from './Header'
import SongRow from './SongRow'

const Body = ({ spotify }) => {

  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='bodyInfo'>
        <img src={ discover_weekly?.images[0].url } alt='discoverWeekly' />
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{ discover_weekly?.description }</p>
        </div>
      </div>

      <div className='bodySongs'>
        <div className='songIcon'>
          <PlayCircleFilled className='song_play' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>

        {
          discover_weekly?.tracks.items.map(item => 
            <SongRow track={item.track} />
          )
        }
      </div>
    </div>
  )
}

export default Body