import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import TimeLine from '../pages/TimeLine';
import NewPost from '../pages/NewPost';
import NotFound from '../pages/NotFound';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={TimeLine} isPrivate />
    <Route path="/postar" exact component={NewPost} isPrivate />
    <Route path="/login" exact component={SignIn} />
    <Route path="/cadastro" exact component={SignUp} />

    <Route path="*" exact component={NotFound} isPrivate />
  </Switch>
);

export default Routes;
