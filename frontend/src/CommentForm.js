import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCommentToAPI } from './action';

function CommentForm({ postid }) {
    const INITIAL_STATE = "";
    const [comment, setComment] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { value } = evt.target;
        setComment(value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addCommentToAPI(postid, comment));
        setComment(INITIAL_STATE);
    }

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="comment">Leave a comment...</label>
            <input rows="2" className="form-control" id="comment" name="comment" value={comment} onChange={handleChange} />
            <button className="btn btn-primary btn-sm">Add comment</button>
        </form>
    );
}

export default CommentForm;