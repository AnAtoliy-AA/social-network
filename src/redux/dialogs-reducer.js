const ACTION_CONST = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
}

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case ACTION_CONST.ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 6, message: newMessage }]
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return { type: ACTION_CONST.ADD_MESSAGE };
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: ACTION_CONST.UPDATE_NEW_MESSAGE_TEXT, newMessageText: text };
}

export default dialogsReducer;