import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
   
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.dialogsPage.newMessageText} />
            </div>
            <div>
                <button
                    onClick={addMessage}>Add message</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;