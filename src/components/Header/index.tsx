import { HeaderContainer, Logo, Sides } from './styles'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Sides src={effectLeft} />
      <Logo src={logo} />
      <Sides src={effectRight} />
    </HeaderContainer>
  )
}
