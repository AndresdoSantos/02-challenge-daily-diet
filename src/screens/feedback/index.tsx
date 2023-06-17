import { Button } from '../../components/button'

import InsideTheDietSVG from '../../../svg/inside-diet.svg'

import {
  Container,
  Description,
  DescriptionWrapper,
  ImageWrapper,
  Title,
} from './styles'

export function Feedback() {
  return (
    <Container>
      <Title feedback="positive">Continue assim!</Title>
      <DescriptionWrapper>
        <Description>Você continua</Description>
        <Description variant="bold">dentro da dieta.</Description>
        <Description>Muito bem!</Description>
      </DescriptionWrapper>

      <ImageWrapper>
        <InsideTheDietSVG />
      </ImageWrapper>

      <Button.Root style={{ width: 200 }}>
        <Button.Title>Ir para a página inicial</Button.Title>
      </Button.Root>
    </Container>
  )
}
