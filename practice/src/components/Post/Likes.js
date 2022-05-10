import React, { useState, useContext } from 'react';
import FavoritesContext from '../../contexts/favoritesContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useApi } from '../../hooks/useApi';
import { Snackbar, Badge, Button, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export const Likes = ({ likes, postId, isItFavorite }) => {
  const api = useApi();
  const { writeLS, removeLS } = useLocalStorage();
  const [open, setOpen] = useState(false)
  const [badgeContent, setBadgeContent] = useState(likes.length);
  const { setFavorite } = useContext(FavoritesContext);
  
  const addFavorite = () => { 
    writeLS('favorite', postId);
    setFavorite(prevState => [...prevState, postId]);

    api.addLike(postId)
    .then(addedLike => {
      setBadgeContent(addedLike.likes.length);
      setOpen(true)})
    .catch(() => alert('Не удалось поставить лайк'))
  }

  const removeFavorite = () => {
    removeLS('favorite', postId);
    setFavorite(prevState => prevState.filter(id => postId !== id));

    api.deleteLike(postId)
    .then(deletedLike => {
      setBadgeContent(deletedLike.likes.length)
      setOpen(true)})
    .catch(() => alert('Не удалось снять лайк'))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
      <>
      {
        isItFavorite ? (
        <>
        <Button onClick={removeFavorite} sx={{mb: 1}}>
          <Badge badgeContent={badgeContent} color='badge' showZero>
            <FavoriteIcon color='primary' />
          </Badge>
        </Button>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert variant='filled' severity='info' color='secondary' icon={<SentimentSatisfiedAltOutlinedIcon fontSize='inherit' />}>Вы поставили лайк</Alert>
        </Snackbar>
        </>
        ) : (
        <>
        <Button onClick={addFavorite} sx={{mb: 1}}>
          <Badge badgeContent={badgeContent} color='badge' showZero>
            <FavoriteBorderOutlinedIcon color='primary' />
          </Badge>  
        </Button>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert variant='filled' severity='info' color='secondary' icon={<SentimentDissatisfiedOutlinedIcon fontSize='inherit' />}>Вы убрали лайк</Alert>
        </Snackbar>
        </>
        )
      }
      </>

  )
}
