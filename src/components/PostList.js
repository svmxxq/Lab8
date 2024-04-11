import React from 'react';

import { useSelector } from 'react-redux';
import Post from './Post';
import './PostList.css';

const PostList = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className="container">
            <h2 className="heading">Posts</h2>
            {posts.map((post) => (   //метод
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
