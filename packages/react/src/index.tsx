import { styled } from './styles'

import { colors } from '@tricia-ui/tokens'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button style={{ color: colors.ignite300 }}>Hello World</Button>
}
