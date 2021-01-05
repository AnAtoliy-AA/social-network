import { profileAPI, usersAPI } from "../api/api";

const ACTION_CONST = {
    ADD_POST: 'PROFILE_REDUCER_ADD-POST',
    SET_USER_PROFILE: 'PROFILE_REDUCER_SET_USER_PROFILE',
    SET_STATUS: 'PROFILE_REDUCER_SET_STATUS',
    SAVE_PHOTO_SUCCESS: 'PROFILE_REDUCER_SAVE_PHOTO_SUCCESS',
    DELETE_POST: 'PROFILE_REDUCER_DELETE_POST',
}

let initialState = {
    posts: [
        { id: 1, message: 'hi', likesCount: 4 },
        { id: 2, message: 'hi how are you', likesCount: 6 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case ACTION_CONST.ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case ACTION_CONST.SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case ACTION_CONST.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case ACTION_CONST.SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ACTION_CONST.ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: ACTION_CONST.SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: ACTION_CONST.SET_STATUS, status });
export const deletePost = (postId) => ({ type: ACTION_CONST.DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: ACTION_CONST.SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
}

export default profileReducer;
