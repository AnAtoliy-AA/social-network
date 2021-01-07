import { profileAPI, usersAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ACTION_CONST = {
    ADD_POST: 'PROFILE_REDUCER_ADD-POST',
    SET_USER_PROFILE: 'PROFILE_REDUCER_SET_USER_PROFILE',
    SET_STATUS: 'PROFILE_REDUCER_SET_STATUS',
    SAVE_PHOTO_SUCCESS: 'PROFILE_REDUCER_SAVE_PHOTO_SUCCESS',
    DELETE_POST: 'PROFILE_REDUCER_DELETE_POST',
}

export type InitialStateType = typeof initialState;

let initialState = {
    posts: [
        { id: 1, message: 'hi', likesCount: 4 },
        { id: 2, message: 'hi how are you', likesCount: 6 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType}
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ACTION_CONST.ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ACTION_CONST.ADD_POST, newPostText });

type SetUserProfileActionType = {
    type: typeof ACTION_CONST.SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: ACTION_CONST.SET_USER_PROFILE, profile });
type SetStatusActionType = {
    type: typeof ACTION_CONST.SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: ACTION_CONST.SET_STATUS, status });

type DeletePostActionType = {
    type: typeof ACTION_CONST.DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: ACTION_CONST.DELETE_POST, postId });


type SavePhotoSuccess = {
    type: typeof ACTION_CONST.SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({ type: ACTION_CONST.SAVE_PHOTO_SUCCESS, photos });



export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));

}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;
