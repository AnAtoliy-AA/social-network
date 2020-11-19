import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1">
                        SASHA
                       </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2">
                        MASHA</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3">
                        PASHA
                        </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4">
                        KASHA </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/5">
                        PROSTOKVASHA
                         </NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>ghg</div>
                <div className={styles.message}>dsssssssss</div>
                <div className={styles.message}>sdfsdfsfd</div>
                <div className={styles.message}>sdrt</div>
            </div>
        </div>
    )
}

export default Dialogs;