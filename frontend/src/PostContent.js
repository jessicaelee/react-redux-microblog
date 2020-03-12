import React, { useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useDispatch } from 'react-redux';
import { getOnePostFromAPI } from './action';
import './PostContent.css';

function PostContent({ post, toggleEditing }) {
  let { title, description, body, comments, id } = post;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comments) {
      dispatch(getOnePostFromAPI(id));
    }
  }, [dispatch, comments, id])

  return (
    <div className="post-content">
      <div className="post">
        <h3>{title}</h3>
        <h5><i>{description}</i></h5>
        <p>{body}</p>
        <button className="btn btn-secondary btn-sm" onClick={toggleEditing}>Edit</button>
      </div>
      <hr />
      {!comments ? "Loading..."
        : <div className="comment-container"> <h4>{comments.length || 0} Comment{comments.length === 1 ? "" : "s"}</h4>
          <CommentForm postid={id} />
          <div className="comment-container">
            {comments.map(comment =>
              <Comment key={comment.id} comment={comment} />

            )}
          </div>
        </div>
      }
    </div>
  )
};

export default PostContent;