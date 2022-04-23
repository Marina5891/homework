import React from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import PostList from '../PostList/PostList'

export const MainContainer = ({ user, posts, favorite, setFavorite /*, isItFavorite, setIsItFavorite */ }) => {
  return (
    <main>
        <TitleContainer userName={user?.name} />
        <PostList 
          posts={posts} 
          favorite={favorite} 
          setFavorite={setFavorite} 
          //isItFavorite={isItFavorite}
          //setIsItFavorite={setIsItFavorite}
        />
    </main>
  )
}
