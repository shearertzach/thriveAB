import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../constants/routes'

const FooterContent = () => (
  <Switch>
    {
      routes.map((route) => (
        <Route component={route.component} key={`${route.display}-content`} path={route.path} />
      ))
    }
  </Switch>
)

export default FooterContent