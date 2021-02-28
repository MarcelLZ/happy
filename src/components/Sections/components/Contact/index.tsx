import { Section } from '../Section'

import { Button } from '../../../Form/components/Button'
import { RegularText } from '../../../Typography/components/RegularText'

/**
 * Styles.
 */
import { Container, SectionContainer, Image, ButtonContainer } from './styles'


/**
 * Type definitions.
 */
type Props = {}
/**
 * Component.
 */

export function Contact({}: Props) {
  return (
    <Container>
      <Image src='/images/paper-plane.svg' />

      <Section title='Contato' hasUnderline={false}>
        <SectionContainer>
          <RegularText text='Dúvidas, comentários ou sugestões? Estamos sempre à disposição!' />

          <ButtonContainer>
            <Button onClick={() => location.href = 'mailto:contato@happy.ong.br'}>Enviar um e-mail</Button>
          </ButtonContainer>
        </SectionContainer>
      </Section>
    </Container>
  );
}
