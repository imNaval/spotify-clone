import React from 'react'
import { loginUrl } from '../Spotify/Spotify'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="spotify-logo" />

        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login