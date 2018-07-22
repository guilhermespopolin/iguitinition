import React from 'react';

import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/UI/pageLoader';

const Welcome = Loadable({
  loader: () => import('components/screens/welcome'),
  loading: PageLoader,
});

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  );
}

export default Routes;
