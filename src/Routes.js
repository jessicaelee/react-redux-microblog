import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import New from './New';
import PostContent from './PostContent';


function Routes() {
  const [posts, setPosts] = useState([])

  const addPost = (newPost) => {
    setPosts(oldPosts => [...oldPosts, newPost])
  }

  return (
    <Switch>
      <Route exact path="/"> <Home posts={posts} /> </Route>
      <Route exact path="/new"> <New handlePost={addPost} /> </Route>
      <Route exact path="/:postid"> <PostContent /> </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;