import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const HeaderRoot = styled.View`
  height: 132px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[5]};
`

type HeaderArrowProps = {
  variant: 'green' | 'red'
}

const HeaderArrow = styled(Feather)<HeaderArrowProps>`
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.gray[2]};

  position: absolute;
  left: 24px;
  top: 56px;
`

const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[18]};
`

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;

  gap: 20px;
`

type InsideTheDietButtonRootProps = {
  type?: 'green' | 'red' | undefined
}

const InsideTheDietButtonRoot = styled.Pressable<InsideTheDietButtonRootProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  gap: 8px;
  height: 50px;
  flex: 1;

  ${({ type, theme }) => {
    if (type === undefined) {
      return css`
        background-color: ${theme.colors.gray[6]};
        border: 1px solid ${theme.colors.gray[6]};
      `
    }

    if (type === 'green') {
      return css`
        background-color: ${theme.colors.green.light};
        border: 1px solid ${theme.colors.green.dark};
      `
    }

    if (type === 'red') {
      return css`
        background-color: ${theme.colors.red.light};
        border: 1px solid ${theme.colors.red.dark};
      `
    }
  }}
`

type InsideTheDietButtonIndicatorProps = {
  variant: 'green' | 'red'
}

const InsideTheDietButtonIndicator = styled.View<InsideTheDietButtonIndicatorProps>`
  border-radius: 9999px;

  height: 8px;
  width: 8px;

  ${({ variant, theme }) => {
    if (variant === 'green') {
      return css`
        background-color: ${theme.colors.green.dark};
      `
    }

    if (variant === 'red') {
      return css`
        background-color: ${theme.colors.red.dark};
      `
    }
  }}
`

const InsideTheDietButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[14]};
`

export const S = {
  HeaderRoot,
  HeaderTitle,
  HeaderArrow,
  Section,
  InsideTheDietButtonRoot,
  InsideTheDietButtonTitle,
  InsideTheDietButtonIndicator,
}
