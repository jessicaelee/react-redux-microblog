import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';

function New({ handlePost }) {
    return (
        <div>
            <h2>New Post</h2>
            <Form handlePost={handlePost}>
                <Link to="/">
                    <button type="button">Cancel</button>
                </Link>
            </Form>
        </div>
    )
};

export default New;