import MyPosts from './MyPosts/MyPosts';
import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt="start screen"></img>
            </div>

            {/* <div>
                <img src="https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg"></img>
            </div> */}
           <MyPosts />
        </div>
    )
}

export default Profile;