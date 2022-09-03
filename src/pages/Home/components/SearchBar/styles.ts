import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  margin: 4rem 0 2rem 0;
`

export const PublicationsCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const Input = styled.input`
  margin-top: 1rem;
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme['base-label']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
