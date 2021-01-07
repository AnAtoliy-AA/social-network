import dialogsReducer from "./dialogs-reducer.ts";
import navBarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

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
        },
        navBarPage: {

        },
    },
    _callSubscriber() { },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBarPage =  navBarReducer(this._state.navBarPage, action);
        
        this._callSubscriber(this._state);
    }
}

export default store;
