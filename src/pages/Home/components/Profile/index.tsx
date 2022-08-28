import { ArrowSquareOut, User, Users } from "phosphor-react"
import { Avatar, ProfileContainer, ProfileInfos, UserStats } from "./styles"

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/natanreichow.png"/>
      <ProfileInfos>
        <header>
          <strong>Natan Reichow</strong>
          <a href="https://github.com/natanreichow">
            GITHUB
            <ArrowSquareOut weight="bold" size={16}/>
          </a>
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima maiores aliquid molestiae corporis veniam non nam.</p>

        <UserStats>
          <span>
            <User weight="fill" color="#3A536B"/>
            natanreichow
          </span>
          <span>
            <Users weight="fill" color="#3A536B"/>
            32 followers
          </span>
        </UserStats>
      </ProfileInfos>
    </ProfileContainer>
  )
}