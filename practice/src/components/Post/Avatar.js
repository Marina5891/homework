import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export const UserAvatar = ({avatar, email}) => {
  return (
    <Box sx={{
        display: 'flex', 
        alignItems: 'center'  
      }}>
        <Avatar 
        src={avatar} 
        sx={{ 
          width: '60px',
          height: '60px',
          mb: 2,
          mr: 3
        }}
        variant='circular'
      />
      <Typography 
        component='p'
        sx={{
          fontSize: '14px'
        }}
      >
        {email}
      </Typography>
      </Box>
  )
}
