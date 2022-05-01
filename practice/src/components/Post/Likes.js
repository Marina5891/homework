import React, { useState } from 'react';
import api from '../../utilits/api';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink, deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[600],
    },
  },
});

export const Likes = ({ likes, postId, setFavorite, isItFavorite, writeLS, removeLS }) => {

  const [badgeContent, setBadgeContent] = useState(likes.length);
  
  const addFavorite = () => {
    writeLS('favorite', postId);
    setFavorite(prevState => [...prevState, postId]);

    api.addLike(postId)
    .then(addedLike => {
       setBadgeContent(addedLike.likes.length);
       alert(`Now number of likes: ${addedLike.likes.length}`)})
    .catch(() => alert('Не удалось поставить лайк'))
  }

  const removeFavorite = () => {
    removeLS('favorite', postId);
    setFavorite(prevState => prevState.filter(id => postId !== id));

    api.deleteLike(postId)
    .then(deletedLike => {
      setBadgeContent(deletedLike.likes.length)
      alert(`Now number of likes: ${deletedLike.likes.length}`)})
    .catch(() => alert('Не удалось снять лайк'))
  }

  return (
    <ThemeProvider theme={theme}>
      <Badge badgeContent={badgeContent} color='primary' showZero>
      {
        isItFavorite ? (
        <Button onClick={removeFavorite}>
          <FavoriteIcon sx={{color: deepPurple[600], mb: 2}} />
        </Button>
        ) : (
        <Button onClick={addFavorite}>
          <FavoriteBorderOutlinedIcon sx={{color: deepPurple[600], mb: 2}} />
        </Button>
        )
      }
      </Badge>
    </ThemeProvider>
  )
}
