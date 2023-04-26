import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { SessionProvider } from "next-auth/react"

import { useSession } from 'next-auth/react'

import View from '../components/View/View'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <View>
            <Component {...pageProps} />
          </View>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
