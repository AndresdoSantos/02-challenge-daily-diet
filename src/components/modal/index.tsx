import { RootContainer, RootFooter, RootTitle } from './styles'
import { ModalProps } from 'react-native-modal'
import { ViewProps, TextProps } from 'react-native'

type RootProps = ModalProps

function Root({ children, ...props }: RootProps) {
  return <RootContainer {...props}>{children}</RootContainer>
}

function Title({ children, ...props }: TextProps) {
  return <RootTitle {...props}>{children}</RootTitle>
}

function Footer({ children, ...props }: ViewProps) {
  return <RootFooter {...props}>{children}</RootFooter>
}

export const Modal = {
  Root,
  Title,
  Footer,
}
