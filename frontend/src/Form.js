import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css'

function Form({ postContent, makeAction, toggleEditing }) {
    const { id, comments, votes, ...rest } = postContent || { title: "", description: "", body: "" };
    const INITIAL_STATE = rest;
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fdata => ({
            ...fdata,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch(makeAction(formData, id, comments));
        //TODO: FIX HISTORY LOCATION
        toggleEditing();
    };

    const formInputs = Object.keys(formData).map(name => {
        if (name === "body") {
            return (<div key={name}>
                <label htmlFor={name}>{name}: </label>
                <textarea id={name} name={name} onChange={handleChange} value={formData[name]} className="form-control" rows="10" required />
            </div>)
        } else {
            return (<div key={name}>
                <label htmlFor={name}>{name}: </label>
                <input id={name} name={name} onChange={handleChange} value={formData[name]} className="form-control" required />
            </div>)
        }
    });

    return (
        <div className="form form-group">
            <form onSubmit={handleSubmit}>
                {formInputs}
                <button className="btn btn-primary" type="submit">Save</button>
                <button className="btn btn-secondary" type="button" onClick={toggleEditing}>Cancel</button>
            </form>
        </div>
    );
};

export default Form;