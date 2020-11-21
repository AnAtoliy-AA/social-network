import { addPost, updateNewPostText } from './redux/state'

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
