import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import New from './New';
import Post from './Post';
import { useDispatch } from 'react-redux';
import { getPostsFromAPI } from './action';


function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI())
  }, [dispatch])

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