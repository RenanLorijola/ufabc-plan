import React from 'react'
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute
} from 'react-router-dom'

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps): JSX.Element => {
  return (
    <ReactRoute
      {...rest}
      render={() => {
        return (
          <Component />
        )
      }}
    />
  )
}

export default Route
