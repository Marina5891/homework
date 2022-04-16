import React, { useState, useEffect } from 'react';
import AppCard from '../Card/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import api from '../../utilits/api';

function CardList() {
  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    api.getPosts()
    .then(json => setPosts(json))
    }, [])

  const arrayPosts = posts?.map(post => AppCard(post))
      
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

export default CardList;