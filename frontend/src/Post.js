import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Form from './Form';
import PostContent from './PostContent';
import { editPost } from './action';
import { useSelector } from 'react-redux';

function Post() {
  const { postid } = useParams();
  const post = useSelector(st => st.find(post => postid === post.id.toString()));


  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing(old => !old);

  if (!post) {
    return <Redirect to="/" />
  }

  return (
    <div>
      {
        isEditing ?
          <Form postContent={post} makeAction={editPost}>
            <button class="btn btn-secondary" type="button" onClick={toggleEditing}>Cancel</button>
          </Form>
          :
          <PostContent post={post} toggleEditing={toggleEditing} />
      }
    </div>
  );
};

export default Post;