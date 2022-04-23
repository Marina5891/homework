import React from 'react';
import Post from '../Post/Post';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function PostList({ posts, favorite, setFavorite}) {

  return (
    <Container maxWidth='lg' >
      <Box 
        sx={{
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
      {posts?.map((post) => (
        <Post 
          post={post} 
          key={post._id}
          favorite={favorite}
          setFavorite={setFavorite}
          isItFavorite={favorite.includes(post._id)}
        />
        ))
      } 
      </Box> 
    </Container> 
  ) 
}

export default PostList;