import React from 'react';

function PostContent({ post }) {
    const { title, description, body } = post;
    return (
        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <p>{body}</p>
        </div>
    )
};

export default PostContent;