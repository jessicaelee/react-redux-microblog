import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Form from './Form';
import PostContent from './PostContent';

function Post({ posts, handlePost }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(old => !old);
  }

  const { postid } = useParams();
  const post = posts.find(
    post => postid === post.id
  );

  if(!post){
    return <Redirect to="/"/>
  }

  return (
    <div>
      {
        isEditing ?
          <Form postContent={post} handlePost={handlePost}>
            <button type="button" onClick={toggleEditing}>Cancel</button>
          </Form> :
          <PostContent post={post} toggleEditing={toggleEditing} />
      }
    </div>
  );
};

export default Post;