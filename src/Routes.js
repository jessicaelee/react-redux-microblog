import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import New from './New';
import Post from './Post';


function Routes() {

  return (
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/new"> <New /> </Route>
      <Route exact path="/:postid"> <Post /> </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;