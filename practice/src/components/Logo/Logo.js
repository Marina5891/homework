import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../../../public/assets/png/ReactLogo.png'

export const Logo = () => {
  return (
    <Link to='/'>
      <img 
        src={ReactLogo} 
        width='50%'
      />
    </Link>
  )
}
