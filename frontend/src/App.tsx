import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import GlobalStyle from './styles/global'
import theme from 'styles/theme'
import { Header } from 'components'
import Routes from './routes'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Header />
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </ThemeProvider>
)

export default App
