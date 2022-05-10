import React, { useContext } from 'react';
import PostsContext from '../../contexts/postsContext';
import FavoritesContext from '../../contexts/favoritesContext';
import Post from '../Post/Post';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function PostList() {
  const { posts } = useContext(PostsContext);
  const { favorite } = useContext(FavoritesContext);

  return (
    <Container maxWidth='lg' component='main'>
      <Grid 
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
      {
        posts && 
        <Grid container item spacing={3} sx={{mb: 5}}>
          {
            posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={post._id}>
                <Post 
                  post={post}   
                  isItFavorite={favorite.includes(post._id)}
                />
              </Grid>
            ))
          } 
        </Grid>      
      } 
      </Grid>
    </Container> 
  ) 
}

export default PostList;