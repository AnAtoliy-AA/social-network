const ACTION_CONST = {
    ADD_MESSAGE: 'DIALOGS_REDUCER_ADD-MESSAGE',
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessageBody }]
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return { type: ACTION_CONST.ADD_MESSAGE ,newMessageBody};
}

export default dialogsReducer;