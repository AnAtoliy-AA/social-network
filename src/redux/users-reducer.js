const ACTION_CONST = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
}

let initialState = {
    users: [],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.FOLLOW: {
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
        case ACTION_CONST.UNFOLLOW: {
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