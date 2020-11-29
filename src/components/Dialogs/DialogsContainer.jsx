import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import React from 'react';

const DialogsConatiner = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        // let text = newMessageElement.current.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs
            updateNewMessageTextActionCreator={onMessageChange}
            sendMessage={sendMessage}
            dialogsPage={state} />
    )
}

export default DialogsConatiner;