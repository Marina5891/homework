import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { pink, deepPurple } from '@mui/material/colors';

export const CreatePost = ({ setPostsTotal, page, setPage, quantityPages }) => {
  const navigate = useNavigate();
  const api = useApi();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const {target: {title, text, tags, image}} = event;

    api.addPost({
      title: title.value,
      text: text.value,
      image: image.value,
      tags: tags.value.split(',')
    })
    .then((data => {
      setPostsTotal(prevState => [...prevState, data])
      localStorage.setItem('page', quantityPages)
      setPage(quantityPages)
      navigate(`/?page=${quantityPages}`);
    }))
    .catch(error => alert(error))
  }

  return (
  <Container 
    maxWidth='md' 
    sx={{marginX: 'auto', marginTop: 15, height: '100vh'}} 
  >
    <FormControl 
      onSubmit={handleSubmit} 
      autoComplete='off'
      component='form'
    >
      <Grid container spacing={2}>
      <Grid item xs={12} sx={{mb: 4}}>
          <Typography 
            variant='h4' 
            component='h1' 
            sx={{color: deepPurple[600],
          }}>
            Создание поста
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField type='text' label='Заголовок' name='title' variant='outlined' fullWidth autoFocus/>
        </Grid>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField type='text' label='Текст' name='text' variant='outlined' fullWidth multiline rows={6}/>
        </Grid>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField type='text' label='Теги' name='tags' variant='outlined' fullWidth placeholder='введите теги через запятую'/>
        </Grid>
        <Grid item xs={12} sx={{mb: 4}}>
          <TextField type='text' label='Картинка' name='image' variant='outlined' fullWidth placeholder='добавьте ссылку на картинку'/>
        </Grid>
        <Grid item xs={12} sx={{mb: 4}}>
          <Button 
            variant='contained'
            type='submit' 
            sx={{
              color: deepPurple[50],
              borderColor: deepPurple[900],
              textTransform: 'none',
              '&:hover': {
                color: pink[50],
                backgroundColor: pink[700]
              }
            }}
          >
            Добавить пост
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  </Container>
  )
}
