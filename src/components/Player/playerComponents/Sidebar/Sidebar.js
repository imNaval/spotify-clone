import React from 'react'
import './Sidebar.scss'
import SidebarOption from './SidebarOption'
//mui-->
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../../../DataLayer';

const Sidebar = () => {

  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className='sidebar_logo' 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
        alt="spotifyImage" 
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Library" Icon={LibraryMusicIcon} />

      <br />

      <strong className='sidebar_title'>PLAYLIST</strong>
      <hr />

      {/* <SidebarOption title="Hip hop" /> */}
      {
        playlists?.items?.map(playlist => (
          <SidebarOption title={playlist.name} />
        ))
      }

    </div>
  )
}

export default Sidebar