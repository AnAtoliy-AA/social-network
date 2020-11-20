import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
 

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);


    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;