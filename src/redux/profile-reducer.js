const ACTION_CONST = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
}

let initialState = {
    posts: [
        { id: 1, message: 'hi', likesCount: 4 },
        { id: 2, message: 'hi how are you', likesCount: 6 },
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case ACTION_CONST.ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case ACTION_CONST.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ACTION_CONST.ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: ACTION_CONST.UPDATE_NEW_POST_TEXT, newPostText: text });

export const setUserProfile = (profile) => ({ type: ACTION_CONST.SET_USER_PROFILE, profile });

export default profileReducer;