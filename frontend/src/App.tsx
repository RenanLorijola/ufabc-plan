import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import GlobalStyle from './styles/global'
import theme from 'styles/theme'
import { Header } from 'components'
import Routes from './routes'
import AlertProvider from 'context/alertContext'
import SubjectsProvider from 'context/subjectsContext'
import UserContext from 'context/userContext'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AlertProvider>
      <UserContext>
        <SubjectsProvider>
          <Header />
          <Router>
            <Routes />
            <GlobalStyle />
          </Router>
        </SubjectsProvider>
      </UserContext>
    </AlertProvider>
  </ThemeProvider>
)

export default App
