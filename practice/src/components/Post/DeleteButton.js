import React from 'react';
import api from '../../utilits/api';
import Button from '@mui/material/Button';
import { pink, deepPurple } from '@mui/material/colors';

export const DeleteButton = ({ postId }) => {
    
  const deleteThisPost = () => {
        api.deletePost(postId)
        .then(data => alert('Ваш пост удален'))
        .catch(err => alert(`Не получилось удалить пост: ${err}`))
    }

    return (
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
          Delete post
        </Button>    
    )
}
