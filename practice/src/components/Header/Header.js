import React from 'react';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { Toolbar, Container, AppBar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export const Header = ({ setPage }) => {

  return (
      <AppBar 
        position='fixed' 
        sx={{
          bgcolor: deepPurple[50], 
          boxShadow: '0 0 10px 3px #d1c4e9', 
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar>
            <Logo />
            <NavBar setPage={setPage} />
          </Toolbar>
        </Container>
      </AppBar>
  )
}
