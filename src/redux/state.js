let rerenderEntireTree = () => {}
let state = {
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

};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        // id: 5,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export const subscribe =(observer) => {
rerenderEntireTree = observer;
}

export default state;
