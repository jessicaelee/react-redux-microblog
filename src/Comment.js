import React from 'react';
import { deleteComment } from './action';
import { useDispatch } from 'react-redux';


function Comment({ comment }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteComment(comment));

  return (
    <div>
      <span>{comment.message}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Comment;