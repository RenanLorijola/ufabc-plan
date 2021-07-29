import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import GlobalStyle from './styles/global'
import theme from 'styles/theme'
import { Header } from 'components'
import Routes from './routes'
import AlertProvider from 'context/alertContext'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AlertProvider>
      <Header />
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AlertProvider>
  </ThemeProvider>
)

export default App
