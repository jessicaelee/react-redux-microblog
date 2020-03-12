import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';
import PostContent from './PostContent';
import { updatePostInAPI } from './action';
import { useSelector } from 'react-redux';

function Post() {
  const { postid } = useParams();
  const post = useSelector(st => st.find(post => postid === post.id.toString()));

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing(old => !old);

  if (!post) {
    return <div style={{fontSize:"100px"}}>This post doesn't exist</div>
  }

  return (
    <div>
      {
        isEditing ?
          <Form postContent={post} makeAction={updatePostInAPI} toggleEditing={toggleEditing}/>
          :
          <PostContent post={post} toggleEditing={toggleEditing} />
      }
    </div>
  );
};

export default Post;