import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import React from 'react';
import StoreContext from '../../StoreContext';

const DialogsConatiner = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }

                    return < Dialogs
                        updateNewMessageTextActionCreator={onMessageChange}
                        sendMessage={sendMessage}
                        dialogsPage={state} />
                }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsConatiner;