import { ArrowSquareOut, MapPin, User, Users } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Avatar, ProfileContainer, ProfileInfos, UserStats } from './styles'

export function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    bio: '',
    login: '',
    avatar_url: '',
    html_url: '',
    location: '',
    followers: 0,
  })

  async function fetchUserInfos() {
    const response = await api.get('/users/natanreichow')
    setUserInfo(response.data)
  }

  useEffect(() => {
    fetchUserInfos()
  }, [])

  return (
    <ProfileContainer>
      <Avatar src={userInfo.avatar_url} />
      <ProfileInfos>
        <header>
          <strong>{userInfo.name}</strong>
          <a href={userInfo.html_url}>
            GITHUB
            <ArrowSquareOut weight="bold" size={16} />
          </a>
        </header>

        <p>{userInfo.bio}</p>

        <UserStats>
          <span>
            <User weight="fill" color="#3A536B" />
            {userInfo.login}
          </span>
          <span>
            <MapPin weight="fill" color="#3A536B" />
            {userInfo.location}
          </span>
          <span>
            <Users weight="fill" color="#3A536B" />
            {userInfo.followers}
          </span>
        </UserStats>
      </ProfileInfos>
    </ProfileContainer>
  )
}
