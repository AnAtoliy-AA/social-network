import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({ type: 'UPDATE_NEW_MESSAGE_TEXT', newMessageText: text });
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
                <textarea
                    onChange={onMessageChange}
                    ref={newMessage}
                    value={props.newMessageText} />
            </div>
            <div>
                <button
                    onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;