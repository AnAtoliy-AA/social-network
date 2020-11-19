import Post from '../Post/Post';
import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={ classes.posts }>
                <Post message='HI' likesCount='2'/>
                <Post message='HI world' likesCount='3'/>
            </div>
        </div>
    )
}

export default MyPosts;