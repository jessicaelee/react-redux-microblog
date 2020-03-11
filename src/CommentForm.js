import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import {useDispatch} from 'react-redux'

function CommentForm({postid}) {
    const INITIAL_STATE = { message: "" };
    const [comment, setComment] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { value } = evt.target;
        setComment({ message: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newComment = {...comment, id: uuid(), postid};
        dispatch({type:"ADD_COMMENT", payload: newComment});
        setComment(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Leave a comment...</label>
            <input id="comment" name="comment" value={comment.message} onChange={handleChange} />
            <button>Add comment</button>
        </form>
    );
}

export default CommentForm;