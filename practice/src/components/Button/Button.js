import React from 'react';
import Button from '@mui/material/Button';
import { pink, deepPurple } from '@mui/material/colors';

export const AppButton = () => {
  return (
      <Button 
        variant='outlined'
        component='button'
        sx={{
          color: deepPurple[900],
          borderColor: deepPurple[900],
          fontWeight: 'light', 
          fontSize: 12, 
          textTransform: 'none',
          '&:hover': {
            color: pink['A400'],
            borderColor: pink['A400']
          }
        }}
        onClick={() => console.log('Есть контакт')}
      >
        Create post
      </Button>    
  )
}
