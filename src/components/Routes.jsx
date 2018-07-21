import React from 'react';

import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/UI/pageLoader';

const Home = Loadable({
  loader: () => import('components/screens/home'),
  loading: PageLoader,
});

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
