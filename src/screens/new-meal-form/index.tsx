import { useNavigation } from '@react-navigation/native'
import { Dimensions, View } from 'react-native'
import { useState } from 'react'

import { Content } from '../../components/content'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { S } from './styles'

const CONTENT_HEIGHT = `${Dimensions.get('screen').height - 100}px`

export function NewMealForm() {
  const { goBack } = useNavigation()

  const [insideTheDiet, setInsideTheDiet] = useState<boolean | null>(null)

  return (
    <View style={{ flex: 1 }}>
      <Content height={CONTENT_HEIGHT} style={{ gap: 24 }}>
        <Input.Root>
          <Input.Label>Nome</Input.Label>
          <Input.Field placeholder="Nome da refeição" />
        </Input.Root>

        <Input.Root>
          <Input.Label>Descrição</Input.Label>
          <Input.Field
            placeholder="Uma breve descrição sobre a refeição"
            multiline={true}
            numberOfLines={4}
            height={120}
          />
        </Input.Root>

        <S.Section>
          <Input.Root style={{ flex: 1 }}>
            <Input.Label>Data</Input.Label>
            <Input.Field placeholder="Data" />
          </Input.Root>

          <Input.Root style={{ flex: 1 }}>
            <Input.Label>Hora</Input.Label>
            <Input.Field placeholder="Hora" />
          </Input.Root>
        </S.Section>

        <S.Section>
          <S.InsideTheDietButtonRoot
            onPress={() => setInsideTheDiet(true)}
            type={insideTheDiet ? 'green' : undefined}
          >
            <S.InsideTheDietButtonIndicator variant="green" />
            <S.InsideTheDietButtonTitle>Sim</S.InsideTheDietButtonTitle>
          </S.InsideTheDietButtonRoot>

          <S.InsideTheDietButtonRoot
            onPress={() => setInsideTheDiet(false)}
            type={insideTheDiet !== null && !insideTheDiet ? 'red' : undefined}
          >
            <S.InsideTheDietButtonIndicator variant="red" />
            <S.InsideTheDietButtonTitle>Não</S.InsideTheDietButtonTitle>
          </S.InsideTheDietButtonRoot>
        </S.Section>

        <Button.Root style={{ marginTop: 'auto', width: '100%' }}>
          <Button.Title>Cadastrar refeição</Button.Title>
        </Button.Root>
      </Content>

      <S.HeaderRoot>
        <S.HeaderArrow
          name="arrow-left"
          variant="green"
          onPress={() => goBack()}
        />
        <S.HeaderTitle>Nova refeição</S.HeaderTitle>
      </S.HeaderRoot>
    </View>
  )
}
