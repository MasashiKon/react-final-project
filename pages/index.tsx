import styled from 'styled-components'
import SideBar from './components/SideBar/SideBar'

import View from './components/View/View'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <View />
}
