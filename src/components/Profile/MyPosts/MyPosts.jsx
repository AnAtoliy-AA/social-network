import Post from '../Post/Post';
import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        // props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h2>
                My posts
               </h2>
            <div>
                <div>
                    <textarea
                     onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText} />
                </div>
                <div>
                    <button 
                    onClick={addPost}>
                        Add post
                        </button>
                </div>
                <div>
                    <button>
                        Remove
                        </button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;