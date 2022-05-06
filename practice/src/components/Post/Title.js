import React from 'react';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';

export const Title = ({ title, postId }) => {

  return (
        <Typography 
          variant='h3'
          sx={{
          fontSize: '18px', 
          color: deepPurple[900], 
          mb: 2,
          }}
        >{title}
      </Typography>
  )
}
