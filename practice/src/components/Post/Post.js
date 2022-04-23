import React, { useState } from 'react';
import { Title } from './Title';
import { UserAvatar } from './Avatar';
import { Text } from './Text';
import { Tags } from './Tags';
import { TimeLine } from './TimeLine';
import { Likes } from './Likes';
import { DeleteButton } from './DeleteButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { deepPurple } from '@mui/material/colors';
import Oops from '../../../public/assets/png/Oops.png'
const dayjs = require('dayjs');

function Post({ post, setFavorite, favorite, isItFavorite}) {

  const {title, author, text, likes, created_at, updated_at, tags, _id, image} = post;
  let avatar, email;

  author !== null ? (
    { avatar, email } = author) : (
    (avatar = Oops) && (email = 'No email'))
  
  const createdDate = dayjs(created_at).format('DD/MM/YYYY, HH:mm:ss')
  const updatedDate = dayjs(updated_at).format('DD/MM/YYYY, HH:mm:ss')
  const arrayTags = tags.filter(tag => { return (tag !== '' && tag != 'undefined' && tag !== ' ') } ); 
  
  const writeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    storage.push(value);
    localStorage.setItem(key, JSON.stringify(storage))
  };

  const removeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    const filteredLikes = storage.filter(postId => value !== postId)
    localStorage.setItem(key, JSON.stringify(filteredLikes))
  }; 

  return (
    <Card 
      sx={{
        width: 350, 
        padding: 1, 
        marginBottom: 3,
        borderColor: deepPurple[100]
      }}
      variant='outlined'
    >
      <CardContent>
        <Title title={title} />
        <Divider sx={{mb: 2, backgroundColor: deepPurple[100]}}/>
        <UserAvatar avatar={avatar} email={email} />
        <CardMedia 
          component="img"
          height="200"
          image={image}
          alt="User image"
          sx={{mb: 2}}
        />
        <Text text={text} />
        <Tags tags={arrayTags} />
        <TimeLine createdDate={createdDate} updatedDate={updatedDate} />
        <Likes 
          likes={likes} 
          postId={_id} 
          favorite={favorite}
          setFavorite={setFavorite}
          isItFavorite={isItFavorite} 
          writeLS={writeLS}
          removeLS={removeLS}
        />
        <DeleteButton postId={_id}/>
      </CardContent>
    </Card>
  )
}

export default Post;