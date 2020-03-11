import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

function PostContent({ post, toggleEditing }) {
    const { title, description, body, comments, id } = post;
    return (
        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <p>{body}</p>
            <button onClick={toggleEditing}>Edit</button>
            <hr/>
            <h4>Comments</h4>
            <CommentForm postid={id}/>
            {comments.map(comment =>
                <Comment key={comment.id} comment={comment} />
            )}
        </div>
    )
};

export default PostContent;