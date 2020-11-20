import Post from '../Post/Post';
import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = () => {

    let postsData = [
{id: 1, message: 'hi', likesCount: 4},
{id: 2, message: 'hi how are you', likesCount: 6},
    ];

    let postsElements = postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;