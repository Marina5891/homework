import React from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Comments = ({text, author: {avatar, name}}) => {
  return (
      <li>
        <Avatar src={avatar} />
        <Typography>{name}</Typography>
        <Typography>{text}</Typography> 
      </li>
  )
}
