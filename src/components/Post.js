import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, updatePost } from '../store/actions/postActions';
import './Post.css'; // Подключение стилей

const Post = ({ post }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedContent, setEditedContent] = useState(post.content);
    const dispatch = useDispatch();  //біздің действиелерімізді Reduxтың сақтайтын жеріне жібереді.
    const store = useSelector(state => state); // Получение состояния хранилища

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        dispatch(updatePost(post.id, { title: editedTitle, content: editedContent }));
        setIsEditing(false);
    };

    return (
        <div className="post-container">
            {isEditing ? (
                <div className="post-edit-container">
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    ></textarea>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <div className="post-content-container">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <div className="post-buttons">
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
