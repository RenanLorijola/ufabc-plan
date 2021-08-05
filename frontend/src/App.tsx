import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import GlobalStyle from './styles/global'
import theme from 'styles/theme'
import { Header } from 'components'
import Routes from './routes'
import AlertProvider from 'context/alertContext'
import SubjectsProvider from 'context/subjectsContext'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AlertProvider>
      <SubjectsProvider>
        <Header />
        <Router>
          <Routes />
          <GlobalStyle />
        </Router>
      </SubjectsProvider>
    </AlertProvider>
  </ThemeProvider>
)

export default App
