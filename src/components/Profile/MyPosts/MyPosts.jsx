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
                <Post message='HI'/>
                <Post message='HI world'/>
            </div>
        </div>
    )
}

export default MyPosts;