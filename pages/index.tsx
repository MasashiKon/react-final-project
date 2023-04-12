import styled from 'styled-components'
import SideBar from './components/SideBar/SideBar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <SideBar />
}
