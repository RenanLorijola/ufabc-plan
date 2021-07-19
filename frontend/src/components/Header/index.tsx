import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core'
import { S3URL } from 'styles/constants'

const Header: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <picture>
              <source src={`${S3URL}/Logo.webp`} type="image/webp" />
              <source src={`${S3URL}/Logo.png`} type="image/png" />
              <img src={`${S3URL}/Logo.png`} alt="Logo da UFABC Plan" />
            </picture>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
