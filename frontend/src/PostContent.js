import React, { useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useDispatch } from 'react-redux';
import { getOnePostFromAPI } from './action';
import './PostContent.css';
import Votes from './Votes'

function PostContent({ post, toggleEditing }) {
  let { title, description, body, comments, id, votes } = post;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comments) {
      dispatch(getOnePostFromAPI(id));
    }
  }, [dispatch, comments, id])

  return (
    <div className="post-content">
      <div className="post">
        <div className="title">
          <h3 className="post-title">{title} </h3>
          {votes} votes
          <Votes postid={id} />
        </div>
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