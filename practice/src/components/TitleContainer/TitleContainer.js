import React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import lavanda from '../../../public/assets/png/lavanda.png'

function TitleContainer() {
  return (
    <Box sx={{
        width: '100vw', 
        backgroundImage: `url(${lavanda})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300,
        marginBottom: 10,
        marginTop: 8,
        paddingTop: 12,
        color: deepPurple[50]
      }}
      position='relative'
    >
      <Grid container direction='row' justifyContent='center'>
        <Grid item>
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
          >
            Welcome to the stories page!
          </Typography>
          <Typography
            paragraph
            sx={{fontSize: '20px', textAlign: 'center'}}
          >
            Here you can read other people's stories {<br/>} or write your own story.
          </Typography>
        </Grid>
      </Grid>
    </Box> 
  )
}

export default TitleContainer;