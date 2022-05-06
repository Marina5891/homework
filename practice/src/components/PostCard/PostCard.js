import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import FavoritesContext from '../../contexts/favoritesContext';
import { useApi } from '../../hooks/useApi';
import { Likes } from '../Post/Likes';
import { Card, CardMedia, CardHeader, CardContent, CardActions, Button, Typography, Grid, Avatar, IconButton, Box, Badge, Paper } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { deepPurple, pink } from '@mui/material/colors';

export const PostCard = () => {
  const api = useApi();
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { writeLS, removeLS } = useLocalStorage();
  const { favorite, setFavorite } = useContext(FavoritesContext);
  const [comments, setComments] = useState(null)
  const [showComments, setShowComments] = useState('none')

  const handleClickReturn = () => {
    navigate('/')
  }
  
  useEffect(() => {
    api.getPost(params.postId)
    .then(data => {
      setPost(data); 
      setComments(data.comments)
    })
    .catch(error => alert(error))
  }, [])

  const handleClickGetComments = () => {
    api.getComments(params.postId)
    .then(data => {
      setComments(data)
      setShowComments('block') 
    })
    .catch(error => alert(error))
  }

  const handleCloseComments = () => {
    setShowComments('none')
  }

  return (
    <Box 
      sx={{
        height: 'fit-content', 
        overflowY: 'auto', 
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
     {post && (
      <Paper elevation={3} sx={{
            width: '80%', 
            marginY: 3, 
            marginX: 'auto',
          }}>
        <Card 
          sx={{padding: 3}}
        >
          <CardHeader 
            avatar={
              <Avatar src={post.author.avatar}/>
            }
            title={post.author.name}
            subheader={post.author.about}
          >
          </CardHeader>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                height="300"
                image={post.image}
                alt="Извините, картинка не загрузилась"
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography variant='h6' component='h2' gutterBottom color='primary'>
                  {post.title}
                </Typography>
                <Typography variant='body1' paragraph>
                  {post.text}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12}>
              <CardActions>
              <Grid container spacing={2} justifyContent='flex-start'>
                <Grid item xs={1}>
                  <Likes 
                    likes={post.likes}
                    postId={post._id}
                    writeLS={writeLS}
                    removeLS={removeLS}
                    setFavorite={setFavorite}
                    isItFavorite={favorite.includes(post._id)}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton 
                    aria-label="comments" 
                    onClick={handleClickGetComments} 
                    >
                    <Badge badgeContent={comments?.length} color='badge' showZero>
                      <MessageIcon sx={{color: deepPurple[600]}}/>
                    </Badge>
                    
                  </IconButton>
                </Grid>
              </Grid>
              
              </CardActions>
            </Grid>
          </Grid>
          <CardContent sx={{marginLeft: 2, display: `${showComments}`}}>
          <Grid container >
          { comments && comments.map(
                (comment) => 
                (<Grid 
                    container 
                    spacing={2} 
                    sx={{marginBottom: 2}} 
                    direction='row' 
                    justifyContent='flex=start' 
                    key={comment._id}>
                  <Grid item>
                    <Avatar src={comment.author.avatar} />
                  </Grid>
                  <Grid item>
                    <Typography>{comment.author.name}</Typography>
                  <Typography>{comment.text}</Typography> 
                  </Grid> 
                </Grid>)
              )
          }
          {
            comments && 
            <Button 
              sx={{fontSize: '15px'}} 
              onClick={handleCloseComments}>
              Скрыть комментарии
            </Button>
          }
          </Grid> 
          </CardContent>
        </Card>
      </Paper>
      )}
    
      <Button 
      onClick={handleClickReturn} 
      variant='contained'
      sx={{
        marginBottom: 3,
        color: deepPurple[50],
        borderColor: deepPurple[900],
        textTransform: 'none',
        '&:hover': {
          color: pink[50],
          backgroundColor: pink[700]
        }
      }}>Назад</Button>
    </Box>
  )
}
