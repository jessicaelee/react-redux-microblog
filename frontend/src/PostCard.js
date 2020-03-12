import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'
import Vote from './Votes'

function PostCard({ post }) {
  const { title, description, id, votes } = post;
  // console.log({ votes })

  return (
    <div className="card">
      <Link className="post-link" to={`/${id}`}>
        <h4 className="card-title">{title}</h4>
      </Link>
      <p className="card-body">{description}</p>
      <p> {votes} votes
        <Vote postid={id} />
      </p>
    </div>
  );
};

export default PostCard;