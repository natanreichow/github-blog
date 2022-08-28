import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: -6rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  z-index: 100;
`

export const Avatar = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 8px;
`

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.5rem;
      color: ${props => props.theme['base-title']};
    }

    a {
      color: ${props => props.theme['blue']};
      text-decoration: none;
      font-weight: bold;
      display: flex;
      gap: 0.5rem;
      font-size: 0.75rem;
    }
  }
`

export const UserStats = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['base-span']};
  }
`


