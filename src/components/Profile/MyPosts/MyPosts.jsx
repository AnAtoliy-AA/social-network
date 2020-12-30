import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

import Post from '../Post/Post';
import React from 'react';
import { TextArea } from '../../common/FormsControls/FormsControls';
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

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={TextArea}
                    placeholder='Enter new post'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;