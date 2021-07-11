import React from 'react'
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute
} from 'react-router-dom'

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType
}

const Route = ({ component: Component, ...rest }: RouteProps): JSX.Element => {
  return (
    <ReactRoute
      {...rest}
      render={() => {
        return <Component />
      }}
    />
  )
}

export default Route
