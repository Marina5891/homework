import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { pink, deepPurple } from '@mui/material/colors';

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
        Создать пост
      </Button>    
  )
}
