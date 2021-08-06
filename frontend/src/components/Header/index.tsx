import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { S3URL } from 'styles/constants'
import { Container } from 'components'

const Header: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <picture>
                <source src={`${S3URL}/Logo.webp`} type="image/webp" />
                <source src={`${S3URL}/Logo.png`} type="image/png" />
                <img src={`${S3URL}/Logo.png`} alt="Logo da UFABC Plan" />
              </picture>
            </Typography>
            <IconButton color="inherit">
              <PersonIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
