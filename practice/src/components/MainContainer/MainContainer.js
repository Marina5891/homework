import React from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import PostList from '../PostList/PostList'

export const MainContainer = ({ user, posts }) => {
  return (
    <main>
        <TitleContainer userName={user?.name} />
        <PostList posts={posts} />
    </main>
  )
}
