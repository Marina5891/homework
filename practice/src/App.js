import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import FavoritesContext from './contexts/favoritesContext';
import api from './utilits/api';
import { Header } from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';
import { CreatePost } from './components/CreatePost/CreatePost';
import { PostCard } from './components/PostCard/PostCard';
import { Footer } from './components/Footer/Footer';
import './style.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
    secondary: {
      main: pink[400],
      dark: pink[900]
    },
    button: {
      main: deepPurple[900],
      contrastText: pink[600]
    },
  }
})

function App () {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || [])
    const [page, setPage] = useState(1)
    const [quantityPages, setQuantityPages] = useState(0)

    useEffect(() => {
      api.getPosts(page)
      .then(post => {
        setPosts(post.posts)
        setQuantityPages(Math.ceil(post.total/12))
      })
      .catch(err => alert(err))
      }, [page, quantityPages])
      
    useEffect(() => {
      api.getUser()
      .then(user => setUser(user))
      .catch(err => alert(err))
    }, [])

    return (
      <ThemeProvider theme={theme}>
        <FavoritesContext.Provider value={{favorite, setFavorite}}>
          <div className='app'>
            <Header />
              <Routes>
                <Route path='/' element={
                    <MainContainer 
                      user={user} 
                      posts={posts}
                      favorite={favorite} 
                      setFavorite={setFavorite}
                      page={page}
                      setPage={setPage}
                      quantityPages={quantityPages}
                    />
                  } 
                />
                <Route 
                  path='create' 
                  element={<CreatePost setPosts={setPosts} quantityPages={quantityPages}/>} 
                />
                <Route 
                  path='post/:postId' 
                  element={<PostCard />} 
                />
              </Routes>
            <Footer />
          </div>
        </FavoritesContext.Provider>
      </ThemeProvider>
    )
}


export default App;