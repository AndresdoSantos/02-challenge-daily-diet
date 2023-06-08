import styled from 'styled-components/native'

const RootContainer = styled.View`
  width: 100%;
  gap: 4;
`

const LabelContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[14]};
`

type FieldContainerProps = {
  height?: number | undefined
}

const FieldContainer = styled.TextInput<FieldContainerProps>`
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.fontSize[16]};

  height: ${({ height }) => height || 48}px;
  min-height: ${({ height }) => height || 48}px;
  max-height: ${({ height }) => height || 48}px;

  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.colors.gray[5]};

  padding: 10px 14px;
`

export const S = {
  RootContainer,
  LabelContainer,
  FieldContainer,
}
