import React from 'react';
import { Title } from './Title';
import { UserAvatar } from './Avatar';
import { Text } from './Text';
import { Tags } from './Tags';
import { TimeLine } from './TimeLine';
import { Likes } from './Likes';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { deepPurple } from '@mui/material/colors';

const dayjs = require('dayjs');

function Post({ title, text, tags, _id, author: {email, avatar}, created_at, updated_at, likes }) {

  const createdDate = dayjs(created_at).format('DD/MM/YYYY, HH:mm:ss')
  const updatedDate = dayjs(updated_at).format('DD/MM/YYYY, HH:mm:ss')
  const arrayTags = tags.filter(tag => { return (tag !== '' && tag != 'undefined' && tag !== ' ') } ); 
 
  return (
    <Card 
      key={_id} 
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
        <Text text={text} />
        <Tags tags={arrayTags} />
        <TimeLine createdDate={createdDate} updatedDate={updatedDate} />
        <Likes likes={likes.length} />
      </CardContent>
    </Card>
  )
}

export default Post;