import React from 'react';
import { CreateButton } from '../CreateButton/CreateButton';
import Box from '@mui/material/Box';

export const NavBar = () => {
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
          <CreateButton/>
        </Box>
  )
}
