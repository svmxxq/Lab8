import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/postActions';
import './AddPostForm.css';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();   //біздің действиелерімізді Reduxтың сақтайтын жеріне жібереді.

    const handleSubmit = (e) => {   //бул функция новый пост косуга жыбереды
        e.preventDefault();   //перезагрузка болып туратын браузерге жыбереды
        dispatch(addPost({ title, content }));
        setTitle('');
        setContent('');
    };

    return (
        <div className="container">
            <h2 className="heading">Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="button-container">
                    <button type="submit">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm;
