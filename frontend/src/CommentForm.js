import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux'

function CommentForm({ postid }) {
    const INITIAL_STATE = { text: "" };
    const [comment, setComment] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { value } = evt.target;
        setComment({ text: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newComment = { ...comment, id: uuid(), postid };
        dispatch({ type: "ADD_COMMENT", payload: newComment });
        setComment(INITIAL_STATE);
    }

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="comment">Leave a comment...</label>
            <input rows="2" className="form-control" id="comment" name="comment" value={comment.text} onChange={handleChange} />
            <button className="btn btn-primary btn-sm">Add comment</button>
        </form>
    );
}

export default CommentForm;