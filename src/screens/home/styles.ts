import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  padding-left: 24;
  padding-right: 24;
  padding-top: 66;
`

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.gray[1]};

  margin-top: 20;
  margin-bottom: 8;
`

const SectionListTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.gray[1]};

  margin-top: 16px;
  margin-bottom: 8px;
`

const SectionListContent = styled.View`
  padding-left: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 16px;

  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-bottom: 8px;

  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  border-radius: 6px;
`

const SectionListContentHour = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.gray[1]};
`

const SectionListContentSeparator = styled.Text`
  background-color: ${({ theme }) => theme.colors.gray[5]};
  height: 14px;
  width: 1px;
`

const SectionListContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.gray[1]};
`

export const S = {
  Container,
  Header,
  Title,
  SectionListTitle,
  SectionListContent,
  SectionListContentHour,
  SectionListContentSeparator,
  SectionListContentTitle,
}
