import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 1rem;
  background: linear-gradient(transparent, ${props => props.theme['base-profile']});
  max-width: 100%;
  height: 296px;
  gap: 2rem;
`

export const Logo = styled.img`
  margin-top: -7rem;
`

export const Sides = styled.img`
  /* max-width: 40%; */
`