import React from 'react';
import Form from './Form'

function New({ handlePost }) {
    return (
        <div>
            <h2>New Post</h2>
            <Form handlePost={handlePost} />
        </div>
    )
};

export default New;