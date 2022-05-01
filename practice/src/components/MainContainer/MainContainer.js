import React from 'react'
import { Link } from 'react-router-dom';
import TitleContainer from '../TitleContainer/TitleContainer'
import PostList from '../PostList/PostList'
import { Pagination, PaginationItem, Stack, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export const MainContainer = ({ user, posts, favorite, setFavorite, page, setPage, quantityPages }) => {

  const handleChangePage = (_, pageNumber) => {
    setPage(pageNumber)
  }
  return (
    <main>
    <Grid 
      container 
      direction='column' 
      justifyContent="center"
      alignItems="center"
      sx={{backgroundColor: deepPurple[50]}}
    >
      <Grid item xs={12}>
        <TitleContainer userName={user?.name} />
      </Grid>

      <Grid item xs={12}>
        <PostList 
          posts={posts} 
          favorite={favorite} 
          setFavorite={setFavorite} 
          userId={user?._id}
        />
      </Grid>  

      <Grid item xs={12} justifyContent='center' marginBottom={4}>
        <Stack spacing={2} >
          <Pagination 
            count={quantityPages} 
            color="primary" 
            page={page} 
            onChange={handleChangePage}
            variant="outlined"
            renderItem={(item) => (
              <PaginationItem 
                component={Link} 
                to={`/?page=${item.page}`}
                {...item} 
              />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
        
        

        
    </main>
  )
}
