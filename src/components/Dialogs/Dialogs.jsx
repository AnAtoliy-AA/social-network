import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem
            name={dialog.name}
            id={dialog.id}
            key={dialog.id} />);

    let messagesElements = state.messages
        .map(m => <Message
            message={m.message}
            key={m.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(text);
    }

if(!props.isAuth) return <Redirect to={'/login'} />

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
                        value={state.newMessageText} />
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