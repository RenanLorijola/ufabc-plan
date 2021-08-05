import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

const ContainerComponent: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </>
  )
}

export default ContainerComponent
