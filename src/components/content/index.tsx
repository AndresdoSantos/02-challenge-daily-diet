import { ViewProps } from 'react-native'

import { S } from './styles'

type Props = ViewProps & {
  height: string
}

export function Content({ children, height, ...props }: Props) {
  return (
    <S.ContentContainer height={height} {...props}>
      {children}
    </S.ContentContainer>
  )
}
