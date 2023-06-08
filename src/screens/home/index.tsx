import { Image, SectionList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Card } from '../../components/card'
import { Button } from '../../components/button'

import LogoIMG from '../../../assets/logo.png'

import { S } from './styles'

export function Home() {
  const { navigate } = useNavigation<any>()

  return (
    <S.Container>
      <S.Header>
        <Image source={LogoIMG} alt="" />
        <Text>Image</Text>
      </S.Header>

      <Card.Root
        style={{ marginTop: 32 }}
        variant="green.light"
        onPress={() => navigate('diet-details')}
      >
        <Card.Arrow variant="green" />
        <Card.Title>90,86%</Card.Title>
        <Card.Description>das refeições dentro da dieta</Card.Description>
      </Card.Root>

      <S.Title>Refeições</S.Title>

      <Button.Root onPress={() => navigate('new-meal-form')}>
        <Button.Icon name="plus" />
        <Button.Title>Nova refeição</Button.Title>
      </Button.Root>

      <SectionList
        sections={[
          {
            title: '12.03.2021',
            data: [
              { id: 1, hour: '22:00', name: 'X-Tudo', insideTheDiet: false },
            ],
          },
          {
            title: '14.03.2021',
            data: [
              {
                id: 2,
                hour: '13:00',
                name: 'Mamão com banana',
                insideTheDiet: true,
              },
              {
                id: 3,
                hour: '17:00',
                name: 'Whey protein',
                insideTheDiet: true,
              },
            ],
          },
        ]}
        renderSectionHeader={({ section }) => (
          <S.SectionListTitle>{section.title}</S.SectionListTitle>
        )}
        renderItem={({ item }) => (
          <S.SectionListContent>
            <S.SectionListContentHour>{item.hour}</S.SectionListContentHour>
            <S.SectionListContentSeparator />
            <S.SectionListContentTitle>{item.name}</S.SectionListContentTitle>
          </S.SectionListContent>
        )}
      />
    </S.Container>
  )
}
