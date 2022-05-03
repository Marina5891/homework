import React, { useContext } from 'react';
import PostsContext from '../../contexts/postsContext';
import FavoritesContext from '../../contexts/favoritesContext';
import Post from '../Post/Post';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function PostList() {
  const { posts } = useContext(PostsContext);
  const { favorite } = useContext(FavoritesContext);

  return (
    <Container maxWidth='lg' >
      {posts && <Box 
        sx={{
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
      {posts.map((post) => (
        <Post 
          post={post} 
          key={post._id}
          isItFavorite={favorite.includes(post._id)}
        />
        ))
      } 
      </Box>} 
    </Container> 
  ) 
}

export default PostList;