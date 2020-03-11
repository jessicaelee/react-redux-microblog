import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import New from './New';
import Post from './Post';


function Routes() {
  const [posts, setPosts] = useState([])

  const addPost = (newPost) => {
    setPosts(oldPosts => [...oldPosts, newPost])
  }

  const editPost = (editedPost) => {
    setPosts(oldPosts => 
      oldPosts.map(post=>{
        if(post.id === editedPost.id){
          return editedPost;
        } else {
          return post;
        }
      })
    )
  }

  return (
    <Switch>
      <Route exact path="/"> <Home posts={posts} /> </Route>
      <Route exact path="/new"> <New handlePost={addPost} /> </Route>
      <Route exact path="/:postid"> <Post posts={posts} handlePost={editPost}/> </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;