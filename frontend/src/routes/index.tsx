import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import { Home, Matricula } from 'pages'

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/matricula" exact component={Matricula} />
  </Switch>
)

export default Routes
