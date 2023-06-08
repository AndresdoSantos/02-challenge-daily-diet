import { PressableProps, TextProps } from 'react-native'

import { RootContainer, RootIcon, RootTitle } from './styles'

type RootProps = PressableProps

function Root({ children, ...props }: RootProps) {
  return <RootContainer {...props}>{children}</RootContainer>
}

type TitleProps = TextProps

function Title({ children, ...props }: TitleProps) {
  return <RootTitle {...props}>{children}</RootTitle>
}

type IconProps = {
  name: string
}

function Icon({ name }: IconProps) {
  return <RootIcon name={name} />
}

export const Button = {
  Root,
  Title,
  Icon,
}
