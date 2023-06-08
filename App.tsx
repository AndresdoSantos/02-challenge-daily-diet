import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import { AppRouter } from './src/routes'
import { useFonts } from './src/hooks/use-fonts'

import { theme } from './src/styles/theme'

export default function App() {
  useFonts()

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  )
}
