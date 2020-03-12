import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'

function PostCard({ post }) {
    const { title, description, id } = post;
    return (
        <div className="card">
            <Link className="post-link" to={`/${id}`}>
                <h4 className="card-title">{title}</h4>
            </Link>
            <p className="card-body">{description}</p>
        </div >
    );
};

export default PostCard;