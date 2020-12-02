import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0) {

        props.setUsers([
            {
                id: 1, photoUrl: 'https://vignette.wikia.nocookie.net/tolik/images/1/1b/IMG_20190530_134438.jpg/revision/latest?cb=20190530104609&path-prefix=ru',
                followed: false, fullName: 'BOSS', status: 'xcv cvvc', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://vignette.wikia.nocookie.net/tolik/images/1/1b/IMG_20190530_134438.jpg/revision/latest?cb=20190530104609&path-prefix=ru',
                followed: true, fullName: 'MAN', status: 'here', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 3, photoUrl: 'https://vignette.wikia.nocookie.net/tolik/images/1/1b/IMG_20190530_134438.jpg/revision/latest?cb=20190530104609&path-prefix=ru',
                followed: false, fullName: 'XXX', status: 'the', location: { city: 'Kiev', country: 'Ukrain' }
            },
            {
                id: 4, photoUrl: 'https://vignette.wikia.nocookie.net/tolik/images/1/1b/IMG_20190530_134438.jpg/revision/latest?cb=20190530104609&path-prefix=ru',
                followed: true, fullName: 'KTO-TO', status: 'sdfsdfsdf', location: { city: 'Minsk', country: 'Belarus' }
            },
        ]
        );
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photoUrl} alt='ava' />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;