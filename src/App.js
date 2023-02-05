import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromResponse } from './components/Spotify/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';

import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  //  const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(()=>{
    const hash = getTokenFromResponse();
    // for security reason we don't want to show it
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token){
      // setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then(playlists =>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      //https://open.spotify.com/playlist/4yJzNIoNknZHcMRsvjAssJ
      spotify.getPlaylist('4yJzNIoNknZHcMRsvjAssJ').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });

    }
  }, []);

  console.log("user --> ", user);
  console.log("token --> ", token);


  
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
