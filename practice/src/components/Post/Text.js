import React from 'react';
import Typography from '@mui/material/Typography';

export const Text = ({ text }) => {
  return (
    <Typography 
      paragraph
      sx={{
        fontSize: '14px',
        mb: 1
      }}
    >
      {text}
    </Typography>
  )
}
