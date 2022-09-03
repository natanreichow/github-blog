import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 1.6;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    max-width: 75%;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const Content = styled.span`
  color: ${(props) => props.theme['base-span']};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
