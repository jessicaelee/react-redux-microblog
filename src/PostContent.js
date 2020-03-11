import React from 'react';

function PostContent({ post, toggleEditing }) {
    const { title, description, body } = post;
    return (
        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <p>{body}</p>
            <button onClick={toggleEditing}>Edit</button>
        </div>
    )
};

export default PostContent;