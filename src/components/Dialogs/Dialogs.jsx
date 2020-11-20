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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="sasha" id="1" />
                <DialogItem name="MASHA" id="2" />
                <DialogItem name="PASHA" id="3" />
                <DialogItem name="KASHA" id="4" />
                <DialogItem name="PROSTOKVASHA" id="5" />
            </div>
            <div className={styles.messages}>
                <Message message="hi" />
                <Message message="by" />
                <Message message="fdf" />
            </div>
        </div>
    )
}

export default Dialogs;