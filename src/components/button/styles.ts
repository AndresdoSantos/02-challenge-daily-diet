import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const RootContainer = styled.Pressable`
  height: 50;
  max-height: 50;
  flex: 1;
  gap: 12;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[2]};
  border-radius: 6;
`

export const RootTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.colors.white};
`

export const RootIcon = styled(Feather)`
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.white};
`
