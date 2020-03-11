import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid'

function Form({ postContent, handlePost }) {
    const INITIAL_STATE = postContent ? postContent : { title: "", description: "", body: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    const { postid } = useParams();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fdata => ({
            ...fdata, [name]: value
        }));
    };

    const formInputs = Object.keys(formData).map(name => (
        <div key={name}>
            <label htmlFor={name}>{name}: </label>
            <input id={name} name={name} required onChange={handleChange} value={formData[name]} />
        </div>
    ));

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const postData = postid ? { ...formData, id: postid } : { ...formData, id: uuid() }

        handlePost(postData)
        history.push('/');
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                {formInputs}
                <button type="submit">Save</button>
                <button >Cancel</button>
            </form>
        </div>
    );
};

export default Form;