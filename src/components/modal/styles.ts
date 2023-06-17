import styled from 'styled-components/native'
import Modal from 'react-native-modal'

export const RootContainer = styled(Modal)`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
`

export const RootTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const RootFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;

  gap: 12px;
`
