import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { deepPurple } from '@mui/material/colors';

export const Tags = ({tags}) => {
  return (
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
        > 
        Tags:
        </Typography>
        <Stack direction="row" spacing={1}>
            {
            tags.map((tag, i) => {
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
  )
}
