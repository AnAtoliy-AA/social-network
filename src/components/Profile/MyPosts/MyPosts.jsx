import Post from '../Post/Post';
import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = () => {

    let postData = [
{id: 1, message: 'hi', likesCount: 4},
{id: 2, message: 'hi how are you', likesCount: 6},
    ];
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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;