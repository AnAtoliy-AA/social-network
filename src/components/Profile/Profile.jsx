import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

// import styles from './Profile.module.css';

const Profile = (props) => {
   
        
    return (
        <div>
           <ProfileInfo />
           <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;