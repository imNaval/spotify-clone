import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromResponse } from './components/Spotify/Spotify';

function App() {

  const [token, setToken] = useState(null);

  //run code based on a given condition
  useEffect(()=>{
    const hash = getTokenFromResponse();
    // for security reason we don't want to show it
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token){
      setToken(_token)
    }
  }, []);
  return (
    <div className="app">
      {
        token ? (
          <h1>Logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
