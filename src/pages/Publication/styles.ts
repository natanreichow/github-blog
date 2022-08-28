import styled from "styled-components";

export const PublicationContainer = styled.div`
  width: 54rem;
  margin: 0 auto;

  header {
    margin-top: -6rem;
    position: relative;
    background: ${props => props.theme['base-profile']};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    line-height: 1.6;
    z-index: 100;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    font-size: 0.75rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme['blue']};

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Infos = styled.div`
  color: ${props => props.theme['base-span']};
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`