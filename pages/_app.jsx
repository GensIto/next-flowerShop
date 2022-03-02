import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
