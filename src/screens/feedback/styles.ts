import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding-top: 160px;
  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
`

export const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  margin: 64px 0;
`

type TitleProps = {
  feedback: 'positive' | 'negative'
}

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[24]};

  text-align: center;

  ${({ feedback, theme }) => {
    switch (feedback) {
      case 'positive':
        return css`
          color: ${theme.colors.green.dark};
        `

      case 'negative':
        return css`
          color: ${theme.colors.red.dark};
        `
    }
  }}
`

type DescriptionProps = {
  variant?: 'bold'
}

export const Description = styled.Text<DescriptionProps>`
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.gray[1]};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'bold':
        return css`
          font-family: ${theme.fonts[700]};
        `

      case undefined:
        return css`
          font-family: ${theme.fonts[400]};
        `
    }
  }};
`

export const DescriptionWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 2px;
`
