import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={ classes.item }>
            <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" alt="" />
                    { props.message }
                    <div>
                        <span>like</span>
                    </div>
        </div>
    )
}

export default Post;