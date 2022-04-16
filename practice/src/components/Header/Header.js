import React from 'react';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { deepPurple } from '@mui/material/colors';

export const Header = () => {
  return (
      <AppBar 
      position='static' 
        sx={{
          mb: '30px',
          bgcolor: deepPurple[50], 
          boxShadow: '0 0 10px 3px #d1c4e9', 
        }}
      >
        <Container 
          maxWidth='lg' 
          sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            padding: '10px 0' 
          }}
        >
          <Logo />
          <NavBar /> 
        </Container>
      </AppBar>
  )
}
