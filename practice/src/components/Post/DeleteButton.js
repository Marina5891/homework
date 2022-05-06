import React, { useState, useContext } from 'react';
import { useApi } from '../../hooks/useApi';
import { Button, Snackbar, Alert } from '@mui/material';
import { pink, deepPurple } from '@mui/material/colors';

export const DeleteButton = ({ postId }) => {
  const api = useApi();
  const [open, setOpen] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const deleteThisPost = () => {
        api.deletePost(postId)
        .then(data => setOpen(true))
        .catch(err => setOpenFail(true))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false) || setOpenFail(false);
  };

  return (
    <>
      <Button 
        variant='outlined'
        component='button'
        sx={{
          display: 'block',
          color: deepPurple[900],
          borderColor: deepPurple[900],
          fontWeight: 'light', 
          fontSize: 14, 
          textTransform: 'none',
          '&:hover': {
            color: pink['A400'],
            borderColor: pink['A400']
          }
        }}
        onClick={deleteThisPost}
      >
        Удалить пост
      </Button>  
      <Snackbar 
        open={open} 
        autoHideDuration={2000} 
        onClose={handleClose} 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert variant='filled' severity='info' color='secondary'>Ваш пост удален</Alert>
      </Snackbar>
      <Snackbar 
        open={openFail} 
        autoHideDuration={2000} 
        onClose={handleClose} 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert variant='filled' severity='info' color='secondary'>Не получилось удалить пост</Alert>
      </Snackbar>    
    </>
  )
}
