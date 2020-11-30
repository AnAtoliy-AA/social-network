import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import React from 'react';
import { connect } from 'react-redux';

// import StoreContext from '../../StoreContext';


// const DialogsConatiner = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let sendMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }
//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }

//                     return < Dialogs
//                         updateNewMessageTextActionCreator={onMessageChange}
//                         sendMessage={sendMessage}
//                         dialogsPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>

//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextActionCreator: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;