import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
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
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ACTION_CONST.FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        }
        case ACTION_CONST.UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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

type FollowSuccessActionType = {
    type: typeof ACTION_CONST.FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: ACTION_CONST.FOLLOW, userId });

type UnfollowSuccessActionType = {
    type: typeof ACTION_CONST.UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: ACTION_CONST.UNFOLLOW, userId });

type SetUsersActionType = {
    type: typeof ACTION_CONST.SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: ACTION_CONST.SET_USERS, users });

type SetCurrentPageActionType = {
    type: typeof ACTION_CONST.SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: ACTION_CONST.SET_CURRENT_PAGE, currentPage: currentPage });

type SetUsersTotalCountActionType = {
    type: typeof ACTION_CONST.SET_TOTAL_PAGES_COUNT
    totalCount: number
}
export const setUsersTotalCount = (totalCount: number): SetUsersTotalCountActionType => ({ type: ACTION_CONST.SET_TOTAL_PAGES_COUNT, totalCount });

type ToggleIsFetchingActionType = {
    type: typeof ACTION_CONST.TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: ACTION_CONST.TOGGLE_IS_FETCHING, isFetching });

type toggleIsFollowingProgressActionType = {
    type: typeof ACTION_CONST.TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressActionType => ({ type: ACTION_CONST.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage: number, pageSize: number) => {

    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}


export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;