import React from 'react'

import Loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom'
import Loading from 'components/ui/Loading'

const LoadableHome = Loadable({
  loader: () => import('components/pages/Home'),
  loading: Loading,
})

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
    </Switch>
  )
}

export default Routes
