import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  User,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Infos, Links, PublicationContainer } from './styles'

export function Publication() {
  const { issueNumber } = useParams()

  const [issues, setIssues] = useState({
    title: '',
    body: '',
    user: {
      login: '',
    },
    created_at: '',
    comments: 0,
  })

  async function fetchIssues() {
    const response = await api.get(
      `/repos/natanreichow/github-blog/issues/${issueNumber}`,
    )
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <PublicationContainer>
      <header>
        <Links>
          <a href="/">
            <CaretLeft weight="bold" />
            BACK
          </a>
          <a
            href={`https://github.com/natanreichow/github-blog/issues/${issueNumber}`}
          >
            SEE IN GITHUB
            <ArrowSquareOut weight="bold" />
          </a>
        </Links>

        <h1>{issues.title}</h1>

        <Infos>
          <span>
            <User weight="fill" />
            {issues.user.login}
          </span>
          <span>
            <CalendarBlank weight="fill" />
            {issues.created_at}
          </span>
          <span>
            <ChatCircle weight="fill" />
            {issues.comments} comments
          </span>
        </Infos>
      </header>

      <div>
        <ReactMarkdown>{issues.body}</ReactMarkdown>
      </div>
    </PublicationContainer>
  )
}
