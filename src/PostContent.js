import React from 'react';
import Comment from './Comment';

function PostContent({ post, toggleEditing }) {
    const { title, description, body, comments } = post;
    return (
        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <p>{body}</p>
            <button onClick={toggleEditing}>Edit</button>
            <hr/>
            <h4>Comments</h4>
            {comments.map(comment =>
                <Comment key={comment.id} comment={comment.message} />
            )}
        </div>
    )
};

export default PostContent;