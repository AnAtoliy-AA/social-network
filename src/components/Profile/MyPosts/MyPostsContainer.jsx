import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import React from 'react';
import { connect } from 'react-redux';

// import StoreContext from '../../../StoreContext';


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }
//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
posts: state.profilePage.posts,
newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToprops)(MyPosts);

export default MyPostsContainer;