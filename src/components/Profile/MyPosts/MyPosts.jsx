import Post from '../Post/Post';
import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h2>
                My posts
               </h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message='HI' likesCount='2' />
                <Post message='HI world' likesCount='3' />
            </div>
        </div>
    )
}

export default MyPosts;