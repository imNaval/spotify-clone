import React from 'react'
import './SongRow.scss'

const SongRow = ({ track }) => {
  return (
    <div className='songRaw'>
      <img className='songAlbum' src={track.album.images[0].url} alt='songImage' />
      <div className='songInfo'>
        <h1>{ track.name }</h1>
        <p>
          {
            track.artists.map(artist => artist.name).join(", ")
          } -{" "}
          { track.album.name }
        </p>
      </div>
    </div>
  )
}

export default SongRow