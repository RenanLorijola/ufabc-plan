import React, { ChangeEvent, useState } from 'react'
import { useUser } from 'context/userContext'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
/* eslint-disable */
const SignUpBox: React.FC = (): JSX.Element => {
  const { updateUser } = useUser()

  const [name, setName] = useState('')
  const [ra, setRa] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errors, setErrors] = useState({
    name: false,
    ra: false,
    password: false,
    confirmPassword: false
  })

  const handleChangeName = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setName(event.target.value)
  }
  const handleChangeRa = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRa(event.target.value)
  }
  const handleChangePassword = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPassword(event.target.value)
  }
  const handleChangeConfirm = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setConfirmPassword(event.target.value)
  }

  const handleValidation = () => {
    setErrors({ ...errors })
  }

  const handleCreateUser = (): void => {
    updateUser()
  }

  return (
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
          <TextField
            sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
            variant="outlined"
            label="Nome *"
            name="name"
            error={errors.name}
            helperText=""
            value={name}
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
            variant="outlined"
            label="RA *"
            name="ra"
            error={errors.ra}
            helperText=""
            value={ra}
            onChange={handleChangeRa}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
            variant="outlined"
            label="Senha *"
            name="password"
            error={errors.password}
            helperText=""
            value={password}
            onChange={handleChangePassword}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
            variant="outlined"
            label="Confirme a senha *"
            name="confirmPassword"
            error={errors.confirmPassword}
            helperText=""
            value={confirmPassword}
            onChange={handleChangeConfirm}
          />
        </Grid>
      </Grid>
      <Button
        sx={{ marginTop: 5, paddingX: 10, justifySelf: 'center' }}
        variant="contained"
        color="primary"
        onClick={handleCreateUser}
      >
        Cadastrar
      </Button>
    </Box>
  )
}

export default SignUpBox
