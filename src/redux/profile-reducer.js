const ACTION_CONST = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CONST.ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case ACTION_CONST.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
        default:
            break;
    }
    return state;
}

export default profileReducer;