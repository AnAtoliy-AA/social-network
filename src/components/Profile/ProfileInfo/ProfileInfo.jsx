import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import React from 'react';
import styles from './ProfileInfo.module.css';

// import ProfileStatus from './ProfileStatus';




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
const onMainPhotoSelected = (e) => {
if (e.target.files.length) {
    props.savePhoto(e.target.files[0]);
}
}
    return (
        <div>
            {/* <div>
                <img className={styles.main__img} src="https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt="start screen"></img>
            </div> */}
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <input type={'file'} onChange={onMainPhotoSelected}/>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;