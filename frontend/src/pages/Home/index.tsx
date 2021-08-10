import React from 'react'
import { Container, SignInBox, SignUpBox } from 'components'
import { Typography } from '@material-ui/core'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div
        style={{
          paddingTop: 20
        }}
      >
        <Typography variant="h1" fontSize={40} textAlign="center">
          Bem vindo ao UFABC Plan
        </Typography>
        <Typography variant="subtitle1" fontSize={22} textAlign="center">
          Seu planejador de graduação
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            marginTop: 40
          }}
        >
          <SignUpBox />
          <Typography sx={{ alignSelf: 'center' }}>Ou então:</Typography>
          <SignInBox />
        </div>
      </div>
    </Container>
  )
}

export default Home
