import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type RootContainerProps = {
  variant: 'green.light' | 'gray.light' | 'red.light'
}

export const RootContainer = styled.Pressable<RootContainerProps>`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 16px;
  padding-left: 16px;

  align-items: center;
  justify-content: center;

  flex: 1;
  min-height: 96px;
  max-height: 96px;

  border-radius: 8px;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'green.light':
        return css`
          background-color: ${theme.colors.green.light};
        `

      case 'gray.light':
        return css`
          background-color: ${theme.colors.gray[6]};
        `

      case 'red.light':
        return css`
          background-color: ${theme.colors.red.light};
        `
    }
  }}
`

type ArrowContainerProps = {
  variant: 'green' | 'red'
}

export const ArrowContainer = styled(Feather)<ArrowContainerProps>`
  font-size: ${({ theme }) => theme.fontSize[24]};
  position: absolute;
  right: 8;
  top: 8;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'green':
        return css`
          color: ${theme.colors.green.dark};
        `

      case 'red':
        return css`
          color: ${theme.colors.red.dark};
        `
    }
  }}
`

export const RootTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[32]};
`

export const RootDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.fontSize[14]};

  text-align: center;
`
