import React from 'react';
import Post from '../Post/Post';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function PostList({ posts }) {
  const arrayPosts = posts?.map(post => Post(post))
      
  return (
    <Container maxWidth='lg' >
      <Box 
        sx={{
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {arrayPosts}
      </Box> 
    </Container> 
  ) 
}

export default PostList;