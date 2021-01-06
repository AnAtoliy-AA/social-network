import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Users.module.css';
import userPhotoDefault from '../../assets/images/user-photo-default.png';

const User = ({user, followingInProgress, follow, unfollow}) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={styles.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhotoDefault} alt='ava' />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </span>
        </span>
    </div>

}
export default User;
