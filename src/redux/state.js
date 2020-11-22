const ACTION_CONST = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
}

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi', likesCount: 4 },
                { id: 2, message: 'hi how are you', likesCount: 6 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'SASHA' },
                { id: 2, name: 'MASHA' },
                { id: 3, name: 'PASHA' },
                { id: 4, name: 'KASHA' },
                { id: 5, name: 'PROSTOKVASHA' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'by' },
                { id: 3, message: 'fdf' },
            ],
            newMessageText: '',
        }
    },
    _callSubscriber() { },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ACTION_CONST.ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost);
                // console.log('textP:', this._state.profilePage.newPostText);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case ACTION_CONST.UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this._state);
                break;
            case ACTION_CONST.ADD_MESSAGE:
                let newMessage = {
                    message: this._state.dialogsPage.newMessageText,
                }
                this._state.dialogsPage.messages.push(newMessage);
                // console.log('textD:', this._state.dialogsPage.newMessageText);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
            case ACTION_CONST.UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(this._state);
                break;
            default:
                break;
        }
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

export const addMessageActionCreator = () => {
    return { type: ACTION_CONST.ADD_MESSAGE };
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: ACTION_CONST.UPDATE_NEW_MESSAGE_TEXT, newMessageText: text };
}
export default store;
