import React from 'react';
import { AppButton } from '../Button/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TitleContainer() {
  return (
    <Container maxWidth='lg' 
    sx={{
      display: 'flex', 
      justifyContent: 'space-between'
    }}>  
      <Box>
        <Typography
          variant='body1'
          component='h1'
          gutterBottom={true}
        >
          Welcome to Our Image Board!
        </Typography>
        <Typography
          paragraph={true}
          sx={{fontSize: '14px'}}
        >
          We're stoked that you're here. &#128568;
        </Typography>
      </Box>
      <Box>
        <AppButton />
      </Box>
    </Container>
  )
}

export default TitleContainer