import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext'
import { Input, PublicationsCounter, SearchBarContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchBar() {
  const { posts, fetchPosts } = useContext(PostContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handleSearchPost(data: SearchFormInput) {
    await fetchPosts(data.query)
    reset()
  }

  function calculatePostsLenght() {
    let count = 0
    posts?.items.forEach((item) => {
      count = count + 1
    })
    return count
  }

  const PostsCount = calculatePostsLenght()

  return (
    <SearchBarContainer>
      <PublicationsCounter>
        <strong>Publications</strong>
        <span>{PostsCount} publications</span>
      </PublicationsCounter>
      <form onSubmit={handleSubmit(handleSearchPost)}>
        <Input
          placeholder="Search for content"
          type="text"
          {...register('query')}
        />
      </form>
    </SearchBarContainer>
  )
}
