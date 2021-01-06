import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({users, totalUsersCount, pageSize, currentPage, onPageChanged,followingInProgress, follow, unfollow}) => {
    return <div>
        < Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />
        {
            users.map(user => <User 
                key={user.id}
                user={user}
                followingInProgress={followingInProgress} 
                follow={follow} 
                unfollow={unfollow}
            />)
        }
    </div>
}

export default Users;
