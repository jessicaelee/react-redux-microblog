import React from 'react';
import { Link } from 'react-router-dom'

function PostCard({ post }) {
    const { title, description, id } = post;
    return (
        <div className="card" style={{ width: "400px" }}>
            <Link to={`/${id}`}>
                <h4>{title}</h4>
            </Link>
            <p className="card-body">{description}</p>
        </div>
    );
};

export default PostCard;