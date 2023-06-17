import { useNavigation, useRoute } from '@react-navigation/native'
import { Dimensions, View } from 'react-native'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Content } from '../../components/content'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { S } from './styles'

const CONTENT_HEIGHT = `${Dimensions.get('screen').height - 100}px`

const mealFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  hour: z.string(),
  insideTheDiet: z.boolean(),
})

type MealFormSchemaInput = z.input<typeof mealFormSchema>

export function MealForm() {
  const { goBack, navigate } = useNavigation()
  const { params } = useRoute() as { params: { id?: number } }

  const { control } = useForm<MealFormSchemaInput>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: params?.id
      ? {
          date: '17/06/2023',
          description: 'Dentro da dieta',
          hour: '15:45',
          insideTheDiet: true,
          name: 'Mamão com banana',
        }
      : undefined,
  })

  const [insideTheDiet, setInsideTheDiet] = useState<boolean | null>(null)

  return (
    <View style={{ flex: 1 }}>
      <Content height={CONTENT_HEIGHT} style={{ gap: 24 }}>
        <Input.Root>
          <Input.Label>Nome</Input.Label>
          <Controller
            name="name"
            control={control}
            render={() => <Input.Field placeholder="Nome da refeição" />}
          />
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

        <Button.Root
          style={{ marginTop: 'auto', width: '100%' }}
          onPress={() => navigate('feedback')}
        >
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
