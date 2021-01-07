// import { InitialStateType } from './auth-reducer';
const ACTION_CONST = {
    ADD_MESSAGE: 'DIALOGS_REDUCER_ADD-MESSAGE',
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'SASHA' },
        { id: 2, name: 'MASHA' },
        { id: 3, name: 'PASHA' },
        { id: 4, name: 'KASHA' },
        { id: 5, name: 'PROSTOKVASHA' },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'by' },
        { id: 3, message: 'fdf' },
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
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

type SendMessageCreatorActionType = {
    type: typeof ACTION_CONST.ADD_MESSAGE
    newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return { type: ACTION_CONST.ADD_MESSAGE ,newMessageBody};
}

export default dialogsReducer;