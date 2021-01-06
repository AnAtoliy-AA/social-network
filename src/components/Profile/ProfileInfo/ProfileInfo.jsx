import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, savePhoto, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} alt="" />
                <input type={'file'} onChange={onMainPhotoSelected} />
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;