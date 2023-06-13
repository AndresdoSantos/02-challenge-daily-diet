import { useNavigation } from '@react-navigation/native'
import { Dimensions, View } from 'react-native'
import { FadeInUp } from 'react-native-reanimated'

import { Card } from '../../components/card'
import { Content } from '../../components/content'

import { S } from './styles'

export function DietDetails() {
  const { goBack } = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Content height={`${Dimensions.get('screen').height - 180}px`}>
        <S.ContentTitle>Estatísticas gerais</S.ContentTitle>

        <S.ContentFlex variant="column">
          <Card.Root variant="gray.light" entering={FadeInUp.delay(2 * 100)}>
            <Card.Title>22</Card.Title>
            <Card.Description>
              melhor sequência de pratos dentro da dieta
            </Card.Description>
          </Card.Root>

          <Card.Root variant="gray.light" entering={FadeInUp.delay(3 * 100)}>
            <Card.Title>109</Card.Title>
            <Card.Description>refeições registradas</Card.Description>
          </Card.Root>

          <S.ContentFlex variant="row">
            <Card.Root variant="green.light" entering={FadeInUp.delay(3 * 100)}>
              <Card.Title>99</Card.Title>
              <Card.Description>refeições dentro da dieta</Card.Description>
            </Card.Root>

            <Card.Root variant="red.light" entering={FadeInUp.delay(5 * 100)}>
              <Card.Title>10</Card.Title>
              <Card.Description>refeições fora da dieta</Card.Description>
            </Card.Root>
          </S.ContentFlex>
        </S.ContentFlex>
      </Content>

      <S.HeaderRoot variant="green.light">
        <S.HeaderArrow
          name="arrow-left"
          variant="green"
          onPress={() => goBack()}
        />
        <S.HeaderTitle>90,86%</S.HeaderTitle>
        <S.HeaderDescription>das refeições dentro da dieta</S.HeaderDescription>
      </S.HeaderRoot>
    </View>
  )
}
