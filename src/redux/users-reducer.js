import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const ACTION_CONST = {
    FOLLOW: 'USERS_REDUCER_FOLLOW',
    UNFOLLOW: 'USERS_REDUCER_UNFOLLOW',
    SET_USERS: 'USERS_REDUCER_SET_USERS',
    SET_CURRENT_PAGE: 'USERS_REDUCER_SET_CURRENT_PAGE',
    SET_TOTAL_PAGES_COUNT: 'USERS_REDUCER_SET_TOTAL_PAGES_COUNT',
    TOGGLE_IS_FETCHING: 'USERS_REDUCER_TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS: 'USERS_REDUCER_TOGGLE_IS_FOLLOWING_PROGRESS',
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id',{followed: true})
            }
        }
        case ACTION_CONST.UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id',{followed: false})
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
        case ACTION_CONST.TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case ACTION_CONST.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: ACTION_CONST.FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: ACTION_CONST.UNFOLLOW, userId });
export const setUsers = (users) => ({ type: ACTION_CONST.SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: ACTION_CONST.SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCount = (totalCount) => ({ type: ACTION_CONST.SET_TOTAL_PAGES_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: ACTION_CONST.TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: ACTION_CONST.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;