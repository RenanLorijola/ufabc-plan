import React, { ChangeEvent, useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'

const SignInBox: React.FC = (): JSX.Element => {
  const { updateUser } = useUser()

  const handleLoginUser = (): void => {
    updateUser()
  }

  const [ra, setRa] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({
    ra: false,
    password: false
  })

  const handleChangeRa = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setRa(event.target.value)
  }
  const handleChangePassword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setPassword(event.target.value)
  }

  const handleValidation = (): void => {
    setErrors({ ...errors })
  }

  useEffect(() => {
    handleValidation()
  }, [ra, password])

  return (
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
          <TextField
            sx={{ marginTop: 2, width: '80%', marginLeft: '10%' }}
            variant="outlined"
            label="RA"
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
            label="Senha"
            name="password"
            error={errors.password}
            helperText=""
            value={password}
            onChange={handleChangePassword}
          />
        </Grid>
      </Grid>
      <Button
        sx={{ marginTop: 5, paddingX: 10, justifySelf: 'center' }}
        variant="contained"
        color="primary"
        onClick={handleLoginUser}
      >
        Login
      </Button>
    </Box>
  )
}

export default SignInBox
