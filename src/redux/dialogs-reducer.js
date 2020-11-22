const ACTION_CONST = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
}


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CONST.ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
            }
            state.messages.push(newMessage);;
            state.newMessageText = '';
            break;
        case ACTION_CONST.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
        default:
            break;
    }
    return state;
}

export default dialogsReducer;