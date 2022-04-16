import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { pink, deepPurple } from '@mui/material/colors';
import { ReactComponent as Remix } from '../../../public/assets/svg/Remix.svg';

export const Logo = () => {
  return (
    <SvgIcon 
      component={Remix} 
      viewBox='0 0 512 128' 
      sx={{
        fill: deepPurple[900],
        width: '100px', 
        marginTop: 0.5,
        '&:hover': {
          fill: pink['A400']
        }
      }} 
    />
  )
}
