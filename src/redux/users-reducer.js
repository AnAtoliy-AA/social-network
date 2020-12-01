const ACTION_CONST = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS'
}

let initialState = {
    users: [
        { id: 1, followed: 'false', fullName: 'BOSS', status: 'xcv cvvc', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: 'true', fullName: 'MAN', status: 'here', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 3, followed: 'false', fullName: 'XXX', status: 'the', location: { city: 'Kiev', country: 'Ukrain' } },
        { id: 4, followed: 'true', fullName: 'KTO-TO', status: 'sdfsdfsdf', location: { city: 'Minsk', country: 'Belarus' } },
    ],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case ACTION_CONST.UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case ACTION_CONST.SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: ACTION_CONST.FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: ACTION_CONST.UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: ACTION_CONST.SET_USERS, users });
export default usersReducer;