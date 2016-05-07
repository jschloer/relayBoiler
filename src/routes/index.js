import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ViewerQuery from './ViewerQuery';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import UsersView from '../views/UsersView/UsersView';
// import BlankView from '../views/BlankView/BlankView';

export default (store) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={UsersView} queries={ViewerQuery}/>
  </Route>
);
