const ACTION_CONST = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGES_COUNT: 'SET_TOTAL_PAGES_COUNT',
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return { ...state, users: action.users }
        }
        case ACTION_CONST.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case ACTION_CONST.SET_TOTAL_PAGES_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: ACTION_CONST.FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: ACTION_CONST.UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: ACTION_CONST.SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({ type: ACTION_CONST.SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCountActionCreator = (totalCount) => ({type:ACTION_CONST.SET_TOTAL_PAGES_COUNT,totalCount});
export default usersReducer;