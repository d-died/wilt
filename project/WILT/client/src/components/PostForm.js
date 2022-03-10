import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

const PostForm = () => {

    const [ formState, setFormState ] = useState({ title: '', description: ''})

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <div>
            <button>Want to make a post?</button>
            <form>
            <div className="form">
                <label> Post title:
                    <input name = 'title' type='text' onChange={ e => handleChange(e) } value={ formState.title }/> 
                </label>
                <label> What did you learn today?
                    <input name='description' type='text' onChange={ e => handleChange(e) } value={ formState.description }/>
                </label>
            </div>
        </form>
        </div>
        
    )
}

export default PostForm