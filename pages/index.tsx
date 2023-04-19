import styled from 'styled-components'

import Main from '../components/Main/Main'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Main />
}
