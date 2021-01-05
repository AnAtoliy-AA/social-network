import { getAuthUserData } from "./auth-reducer";

const ACTION_CONST = {
    SET_INITIALIZED_SUCCESS: 'SET_INITIALIZED_SUCCESS',
}

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONST.SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: ACTION_CONST.SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    promise.then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;