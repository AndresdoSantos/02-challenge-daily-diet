import { PressableProps, TextProps } from 'react-native'
import Animated from 'react-native-reanimated'
import { ComponentProps } from 'react'

import {
  ArrowContainer,
  RootContainer,
  RootDescription,
  RootTitle,
} from './styles'

type RootProps = PressableProps &
  ComponentProps<typeof Animated.View> & {
    variant: 'green.light' | 'gray.light' | 'red.light'
  }

function Root({ variant, children, entering, ...props }: RootProps) {
  return (
    <RootContainer variant={variant} entering={entering} {...props}>
      {children}
    </RootContainer>
  )
}

type ArrowProps = {
  variant: 'green' | 'red'
}

function Arrow({ variant }: ArrowProps) {
  return <ArrowContainer variant={variant} name="arrow-up-right" />
}

type TitleProps = TextProps

function Title({ children, ...props }: TitleProps) {
  return <RootTitle {...props}>{children}</RootTitle>
}

type DescriptionProps = TextProps

function Description({ children, ...props }: DescriptionProps) {
  return <RootDescription {...props}>{children}</RootDescription>
}

export const Card = {
  Root,
  Arrow,
  Title,
  Description,
}
