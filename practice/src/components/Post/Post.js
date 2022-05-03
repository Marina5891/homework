import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { Title } from './Title';
import { UserAvatar } from './Avatar';
import { Text } from './Text';
import { Tags } from './Tags';
import { TimeLine } from './TimeLine';
import { Likes } from './Likes';
import { DeleteButton } from './DeleteButton';
import { Card, CardContent, CardMedia, Divider, Paper } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Oops from '../../../public/assets/png/Oops.png';
import '../../style.css';

const dayjs = require('dayjs');

function Post({ post, isItFavorite }) {
  const { user } = useContext(UserContext);
  const { title, author, text, likes, created_at, updated_at, tags, _id, image } = post;
  let avatar, email, myId;

  author !== null ? (
    { avatar, email, _id: myId } = author) : (
    (avatar = Oops) && (email = 'No email'))
  
  const createdDate = dayjs(created_at).format('DD/MM/YYYY, HH:mm:ss')
  const updatedDate = dayjs(updated_at).format('DD/MM/YYYY, HH:mm:ss')

  const arrayTags = tags.filter(tag => {
    return (tag !== '' && tag != 'undefined' && tag !== ' ') 
  }); 

  return (
    <Paper 
      elevation={4}  
      sx={{
        width: 350, 
        marginBottom: 3,
      }}
    >
    <Card 
      sx={{padding: 1, borderColor: 'transparent'}}
      variant='outlined'
    >
      <CardContent>
        <Link to={`post/${_id}`} className='link'>
          <Title title={title} />
        </Link>
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
          isItFavorite={isItFavorite} 
        />
        {
          user?._id === myId ?
          (<DeleteButton postId={_id} />) :
          (<span style={{display: 'none'}}><DeleteButton /></span>)
        }
      </CardContent>
    </Card>
    </Paper>
  )
}

export default Post;