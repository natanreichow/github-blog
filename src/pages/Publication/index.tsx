import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, User } from "phosphor-react";
import { Infos, Links, PublicationContainer } from "./styles";

export function Publication() {
  return (
    <PublicationContainer>
      <header>
        <Links>
          <a href="/">
            <CaretLeft weight="bold" />
            BACK
          </a>
          <a href="https://github.com/natanreichow/github-blog/issues/1">
            SEE IN GITHUB
            <ArrowSquareOut weight="bold" />
          </a>
        </Links>

        <h1>JavaScript data types and data structures</h1>

        <Infos>
          <span>
            <User weight="fill"/>
            natanreichow
          </span>
          <span>
            <CalendarBlank weight="fill"/>
            1 day ago
          </span>
          <span>
            <ChatCircle weight="fill"/>
            5 comments
          </span>
        </Infos>
      </header>
    </PublicationContainer>
  )
}