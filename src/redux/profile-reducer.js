const ACTION_CONST = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
}

let initialState = {
    posts: [
        { id: 1, message: 'hi', likesCount: 4 },
        { id: 2, message: 'hi how are you', likesCount: 6 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case ACTION_CONST.UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ACTION_CONST.ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: ACTION_CONST.UPDATE_NEW_POST_TEXT, newPostText: text }
}

export default profileReducer;