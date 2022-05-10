import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostsContext from '../../contexts/postsContext';
import UserContext from '../../contexts/userContext';
import ModalFormContext from '../../contexts/modalFormContext';
import { CreateButton } from '../CreateButton/CreateButton';
import { Box, Stack, Avatar, Chip } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';

export const NavBar = ({ setPage }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { setPosts } = useContext(PostsContext);
  const { setModalFormState } = useContext(ModalFormContext)

  const deleteUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('page');
    setPage(1);
    navigate(`/?page=1`)
    setUser(null);
    setPosts(null);
    setModalFormState(() => {
      return {
          isOpen: true,
          msg: '',
      };
    });
  };
  return (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
            flexGrow: 1
          }} 
          component='nav'
        >
        {
          user && 
            <Stack direction='row' spacing={1} sx={{mr: 4}}>
              <Chip 
                avatar={<Avatar src={user.avatar}/>} 
                label={user.name}
                variant='outlined'
                sx={{marginRight: 2, borderColor: deepPurple[600]}}  
              />
              <Chip 
                icon={<LogoutOutlined />}  
                label='Выход' 
                onClick={deleteUser}   
                variant="outlined" 
              />
            </Stack>
            }
          <CreateButton/>
        </Box>
  )
}
