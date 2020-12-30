import { Field, reduxForm } from 'redux-form';

import Post from '../Post/Post';
import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}
    />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h2>
                My posts
               </h2>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                name='newPostText' 
                component='textarea'
                placeholder='Enter new post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;