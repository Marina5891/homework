import React from 'react';
import Typography from '@mui/material/Typography';

export const Text = ({ text }) => {
  return (
    <Typography 
      component='p'
      sx={{
        fontSize: '14px',
        mb: 4
      }}
    >
      {text}
    </Typography>
  )
}
