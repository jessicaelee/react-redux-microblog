import React from 'react';
import Form from './Form'
import { Link, useHistory } from 'react-router-dom';
import { addPostToAPI } from "./action";

function New() {
    const history = useHistory();
    const moveOnFromForm = () => history.push("/");

    return (
        <div>
            <h2>New Post</h2>
            <Form makeAction={addPostToAPI} toggleEditing={moveOnFromForm}/>
        </div>
    )
};

export default New;