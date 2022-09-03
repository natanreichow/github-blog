import { formatDistanceToNow } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import { Content, PostCardContainer, Title } from './styles'

export interface PostsHome {
  title: string
  created_at: string
  body: string
  number: number
}

export function Post(props: PostsHome) {
  const transformInDate = new Date(props.created_at)

  const publishedDateRelativeToNow = formatDistanceToNow(transformInDate, {
    addSuffix: true,
  })

  return (
    <PostCardContainer>
      <Title>
        <a href={`/Publication/${props.number}`}>
          <strong>{props.title}</strong>
        </a>
        <span>{publishedDateRelativeToNow}</span>
      </Title>
      <Content>
        <ReactMarkdown>{props.body}</ReactMarkdown>
      </Content>
    </PostCardContainer>
  )
}
