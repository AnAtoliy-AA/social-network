import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarPage: navBarReducer,
});

let store = createStore(reducers);

export default store;
