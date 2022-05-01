import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';

export const Footer = () => {
  return (
    <AppBar 
      position='static'
      component='footer' 
      sx={{
        top: 'auto', 
        bottom: 0, 
        padding: 3, 
        bgcolor: deepPurple[50], 
        boxShadow: 'none', 
        borderTop: '1px solid',
        borderColor: deepPurple[100],
        color: deepPurple[300]
      }}
    >
      <Typography
        variant='body2'
        sx={{textAlign: 'center', fontSize: '12px'}}
      >
        &#169; My React Pages!
      </Typography>
        
    </AppBar>
  )
}
