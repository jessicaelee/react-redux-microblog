import React from 'react';
import { deleteComment } from './action';
import { useDispatch } from 'react-redux';
import './Comment.css'


function Comment({ comment }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteComment(comment));

  return (
    <div className="comment">
      <span>{comment.text}</span>
      <button className="delete-button" onClick={handleDelete}>
        <i class="far fa-trash-alt"></i>
      </button>

    </div>
  );
}

export default Comment;