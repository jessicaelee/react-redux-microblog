import React from 'react';
import { Link } from 'react-router-dom'

function PostCard({ post }) {
    const { title, description, id } = post;
    return (
        <div id={id}>
            <Link to={`/${id}`}><h4>{title}</h4></Link>
            <p>{description}</p>
        </div>
    );
};

export default PostCard;