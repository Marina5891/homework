import React from 'react';
import Button from '@mui/material/Button';
import { pink, deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export const CreateButton = () => {
  const navigate = useNavigate();

  return (
      <Button 
        variant='contained'
        sx={{
          color: deepPurple[50],
          borderColor: deepPurple[900],
        
          textTransform: 'none',
          '&:hover': {
            color: pink[50],
            backgroundColor: pink[700]
          }
        }}
        onClick={() => {return navigate('create')}}
      >
        Create post
      </Button>    
  )
}
