import React from 'react';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink, deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[600],
    },
  },
});

export const Likes = ({ likes }) => {

  return (
    <ThemeProvider theme={theme} >
      <Badge badgeContent={likes} color='primary' showZero >
          <FavoriteIcon sx={{color: deepPurple[600]}} />
      </Badge>
    </ThemeProvider>
  )
}
