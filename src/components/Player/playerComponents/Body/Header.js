import React from 'react'
import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../../../DataLayer';

const Header = ({ spotify }) => {

    const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className='header' >
        <div className='headerLeft'>
            <SearchIcon />
            <input placeholder='Search for Artists, Songs, Albums' type='text' />
        </div>
        <div className='headerRight'>
            <Avatar src={ user?.images[0]?.url } alt={ user?.display_name } />
            <h4>{ user?.display_name }</h4>
        </div>
    </div>
  )
}

export default Header