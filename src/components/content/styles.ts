import styled from 'styled-components/native'

type ContentContainerProps = {
  height: string
}

const ContentContainer = styled.View<ContentContainerProps>`
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};

  z-index: 10;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;

  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;

  align-items: center;

  padding: 23px;
`

export const S = {
  ContentContainer,
}
