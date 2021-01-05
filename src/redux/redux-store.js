import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import { reducer as formReducer } from 'redux-form';
import navBarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarPage: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;
