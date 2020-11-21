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
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this._state);
                break;
            case 'ADD-MESSAGE':
                let newMessage = {
                    message: this._state.dialogsPage.newMessageText,
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE_NEW_MESSAGE_TEXT':
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(this._state);
                break;
            default:
                break;
        }
    }
}

export default store;
