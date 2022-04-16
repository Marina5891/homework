import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { pink, deepPurple } from '@mui/material/colors';

export const NavBar = () => {
  return (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center'
          }} 
          component='nav'
          
        >
          <Button
            component='a'
            sx={{
              color: deepPurple[900], 
              '&:hover': {color: pink['A400']} 
            }}
          >
            Home
          </Button>
          <Button
            component='a'
            sx={{
              color: deepPurple[900], 
              '&:hover': {color: pink['A400']} 
            }}
          >
            Posts
          </Button>
          <Button
            component='a'
            sx={{
              color: deepPurple[900], 
              '&:hover': {color: pink['A400']} 
            }}
          >
            Profile
          </Button>
        </Box>
  )
}
