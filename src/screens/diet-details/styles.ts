import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type HeaderProps = {
  variant: 'green.light' | 'red.light'
}

const HeaderRoot = styled.View<HeaderProps>`
  height: 200px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'green.light':
        return css`
          background-color: ${theme.colors.green.light};
        `

      case 'red.light':
        return css`
          background-color: ${theme.colors.red.light};
        `
    }
  }}
`

type HeaderArrowProps = {
  variant: 'green' | 'red'
}

const HeaderArrow = styled(Feather)<HeaderArrowProps>`
  font-size: ${({ theme }) => theme.fontSize[24]};
  position: absolute;
  left: 24;
  top: 56;

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

const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[32]};
`

const HeaderDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.fontSize[14]};
`

const ContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[14]};

  margin-bottom: 23px;
`

type ContentFlexProps = {
  variant: 'row' | 'column'
}

const ContentFlex = styled.View<ContentFlexProps>`
  gap: 23px;
  width: 100%;

  flex-direction: ${({ variant }) => variant};
`

export const S = {
  HeaderRoot,
  HeaderTitle,
  HeaderDescription,
  HeaderArrow,

  ContentTitle,
  ContentFlex,
}
