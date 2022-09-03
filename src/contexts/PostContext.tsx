import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface GetPostsQueryResponse {
  items: {
    id: string
    title: string
    body: string
    created_at: string
    number: number
  }[]
}

interface PostContextType {
  posts?: GetPostsQueryResponse
  fetchPosts: (query: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<GetPostsQueryResponse>()

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:natanreichow/github-blog is:issue`,
      },
    })
    setPosts(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider
      value={{
        posts,
        fetchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
