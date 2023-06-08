import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: {
        dark: '#639339'
        mid: '#CBE4B4'
        light: '#E5F0DB'
      }
      red: {
        dark: '#BF3B44'
        mid: '#F3BABD'
        light: '#F4E6E7'
      }
      gray: {
        1: '#1B1D1E'
        2: '#333638'
        3: '#5C6265'
        4: '#B9BBBC'
        5: '#DDDEDF'
        6: '#FAFAFA'
      }
      white: '#FFFFFF'
    }
    fonts: {
      400: 'NunitoSans_400Regular'
      700: 'NunitoSans_700Bold'
    }
    fontSize: {
      12: '12px'
      14: '14px'
      16: '16px'
      18: '18px'
      24: '24px'
      32: '32px'
    }
  }
}
