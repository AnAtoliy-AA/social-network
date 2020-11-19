import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
           <div className={ styles.dialogsItems }>
               <div className={ styles.dialog }>SASHA</div>
               <div className={ styles.dialog }>MASHA</div>
               <div className={ styles.dialog }>PASHA</div>
               <div className={ styles.dialog }>KASHA</div>
               <div className={ styles.dialog }>PROSTOKVASHA</div>
           </div>
           <div className={ styles.messages }>
               <div className={ styles.message }>hi</div>
               <div className={ styles.message }>ghg</div>
               <div className={ styles.message }>dsssssssss</div>
               <div className={ styles.message }>sdfsdfsfd</div>
               <div className={ styles.message }>sdrt</div>
           </div>
        </div>
    )
}

export default Dialogs;