import { Field, reduxForm } from 'redux-form';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
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

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newMessageBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button
                >Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;