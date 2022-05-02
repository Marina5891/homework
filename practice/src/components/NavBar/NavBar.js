import React, { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { CreateButton } from '../CreateButton/CreateButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { deepPurple } from '@mui/material/colors';

export const NavBar = () => {
  const {user} = useContext(UserContext);
  console.log(user)
  return (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
            flexGrow: 1
          }} 
          component='nav'
        >
        {user && <Chip 
          avatar={<Avatar src={user.avatar}/>} 
          label={user.name}
          variant='outlined'
          sx={{marginRight: 2, borderColor: deepPurple[600]}}  
        />}
          <CreateButton/>
        </Box>
  )
}
