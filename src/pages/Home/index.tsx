import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { HomeContainer, PostsSection } from './styles'

export function Home() {
  const { posts } = useContext(PostContext)

  return (
    <HomeContainer>
      <Profile />
      <SearchBar />
      <PostsSection>
        {posts?.items.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              created_at={post.created_at}
              number={post.number}
              body={post.body}
            />
          )
        })}
      </PostsSection>
    </HomeContainer>
  )
}
