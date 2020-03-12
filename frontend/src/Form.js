import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux';
import './Form.css'

function Form({ postContent, makeAction, children, }) {
    const { id, comments, votes, ...rest } = postContent || { title: "", description: "", body: "" };
    const INITIAL_STATE = rest;
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log({ INITIAL_STATE })
    console.log({ formData })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fdata => ({
            ...fdata,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const postData = id ? { ...formData, comments, id } : { ...formData, comments: [], id: uuid() };

        dispatch(makeAction(postData));
        history.push('/');
    };

    const formInputs = Object.keys(formData).map(name => (
        <div key={name}>
            <label htmlFor={name}>{name}: </label>
            <input id={name} name={name} onChange={handleChange} value={formData[name]} className="form-control" required />
        </div>
    ));

    return (
        <div className="form form-group">
            <form onSubmit={handleSubmit}>
                {formInputs}
                <button className="btn btn-primary" type="submit">Save</button>
                {children}
            </form>
        </div>
    );
};

export default Form;