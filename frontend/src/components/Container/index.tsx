import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

const ContainerComponent: React.FC = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </React.Fragment>
  )
}

export default ContainerComponent
