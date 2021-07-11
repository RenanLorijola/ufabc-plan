import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { Header } from 'components'
import Routes from './routes'

const App = (): JSX.Element => (
  <>
    <Header />
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </>
)

export default App
