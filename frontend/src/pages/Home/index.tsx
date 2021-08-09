import React from 'react'
import { Container } from 'components'
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core'

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
          <Box
            sx={{
              background: '#e9e9e9',
              borderRadius: 3,
              width: '40%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            padding={3}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              fontSize={18}
              textAlign="center"
            >
              Cadastre-se para usar a plataforma
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="name">Nome</InputLabel>
                  <Input id="name" aria-describedby="nome" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="ra">RA</InputLabel>
                  <Input id="ra" aria-describedby="ra" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <Input id="password" aria-describedby="senha" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="passwordConfirm">
                    Confirme a senha
                  </InputLabel>
                  <Input
                    id="passwordConfirm"
                    aria-describedby="confirme a senha"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 5, paddingX: 10, justifySelf: 'center' }}
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
          </Box>
          <Typography sx={{ alignSelf: 'center' }}>Ou então:</Typography>
          <Box
            sx={{
              background: '#e9e9e9',
              borderRadius: 3,
              width: '40%',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            padding={3}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              fontSize={18}
              textAlign="center"
            >
              Faça Login
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="ra">RA</InputLabel>
                  <Input id="ra" aria-describedby="ra" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
                >
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <Input id="password" aria-describedby="senha" />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 5, paddingX: 10, justifySelf: 'center' }}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  )
}

export default Home
