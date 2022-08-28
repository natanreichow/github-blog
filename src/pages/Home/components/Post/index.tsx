import { Content, PostCardContainer, Title } from "./styles";

export function Post() {
  return (
    <PostCardContainer href="/Publication">
      <Title>
        <strong>JavaScript data types and data structures</strong>
        <span>1 day ago</span>
      </Title>
      <Content>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
      </Content>
    </PostCardContainer>
  )
}