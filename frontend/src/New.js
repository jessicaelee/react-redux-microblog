import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';
import { addPost } from "./action";

function New() {

    return (
        <div>
            <h2>New Post</h2>
            <Form makeAction={addPost}>
                <Link to="/">
                    <button class="btn btn-secondary" type="button">Cancel</button>
                </Link>
            </Form>
        </div>
    )
};

export default New;