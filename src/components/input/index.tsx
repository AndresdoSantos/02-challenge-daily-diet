import { TextInputProps, TextProps, ViewProps } from 'react-native'

import { S } from './styles'

type RootProps = ViewProps

function Root({ children, ...props }: RootProps) {
  return <S.RootContainer {...props}>{children}</S.RootContainer>
}

type LabelProps = TextProps

function Label({ children, ...props }: LabelProps) {
  return <S.LabelContainer {...props}>{children}</S.LabelContainer>
}

type FieldProps = TextInputProps & {
  height?: number | undefined
}

function Field({ children, height, ...props }: FieldProps) {
  return <S.FieldContainer height={height} {...props} />
}

export const Input = {
  Root,
  Label,
  Field,
}
