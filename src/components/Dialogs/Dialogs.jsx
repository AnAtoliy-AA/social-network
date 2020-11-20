import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'SASHA' },
        { id: 2, name: 'MASHA' },
        { id: 3, name: 'PASHA' },
        { id: 4, name: 'KASHA' },
        { id: 5, name: 'PROSTOKVASHA' },
    ];

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'by' },
        { id: 3, message: 'fdf' },
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
            </div>
        </div>
    )
}

export default Dialogs;