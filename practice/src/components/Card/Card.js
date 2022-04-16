import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { deepPurple } from '@mui/material/colors'

function AppCard({title, text, tags, _id, author: {email, avatar}, created_at, updated_at}) {
  let arrayTags = tags.filter(tag => { return (tag !== '' && tag != 'undefined' && tag !== ' ') } ); 
 
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
        <Typography 
          variant='h3'
          sx={{
            fontSize: '18px', 
            color: deepPurple[900], 
            mb: 2
          }}
        >
          {title}
        </Typography>
        <Divider sx={{mb: 2, backgroundColor: deepPurple[100]}}/>
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
        
        <Typography 
          component='p'
          sx={{
            fontSize: '14px',
            mb: 4
          }}
        >
        {text}
        </Typography>
        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'flex-start', 
            alignItems: 'center'
          }}
        > 
            <Typography 
              component='span'
              sx={{
                fontSize: '14px',
                display: 'inline-block',
                mr: 2
              }}
            >  Tags:
            </Typography>
            <Stack direction="row" spacing={1}>
              {
                arrayTags.map((tag, i) => {
                  return <Chip 
                      key={i} 
                      label={tag} 
                      variant='outlined' 
                      size='small' 
                      sx={{
                        fontSize: '11px', 
                        borderRadius: '2px',
                        color: deepPurple[600],
                        borderColor: deepPurple[600]
                      }} 
                    />
                })
              }
            </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AppCard;