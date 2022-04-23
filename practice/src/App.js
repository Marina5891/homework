import React, { useState, useEffect } from 'react';
import {Header} from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';
import { Footer } from './components/Footer/Footer';
import api from './utilits/api';
import './style.css';

function App () {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || [])

    useEffect(() => {
      api.getPosts()
      .then(post => setPosts(post))
      }, [favorite])

    useEffect(() => {
      api.getUser()
      .then(user => setUser(user))
    }, [])

    return (
          <>
            <Header />
            <MainContainer 
              user={user} 
              posts={posts}
              favorite={favorite} 
              setFavorite={setFavorite}
            />
            <Footer />
          </>
    )
}


export default App;