import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import { Home } from 'pages'

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
)

export default Routes
