import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

// import styles from './Profile.module.css';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;