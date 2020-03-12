import React, { useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import MicroblogAPI from './MircroblogAPI';
import { useDispatch } from 'react-redux';
import { editPost } from './action';
import './PostContent.css'

function PostContent({ post, toggleEditing }) {
  let { title, description, body, comments, id } = post;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comments) {
      async function getPost() {
        let resp = await MicroblogAPI.getOnePost(id);
        dispatch(editPost(resp))
      }
      getPost();
    }
  }, [])

  return (
    <div className="post-content">
      <div className="post">
        <h3>{title}</h3>
        <h5><i>{description}</i></h5>
        <p>{body}</p>
        <button class="btn btn-secondary btn-sm" onClick={toggleEditing}>Edit</button>
      </div>
      <hr />
      {!comments ? "Loading..."
        : <div className="comment-container"> <h4>{comments.length || 0} Comments</h4>
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