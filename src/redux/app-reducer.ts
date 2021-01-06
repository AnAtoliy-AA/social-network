import { getAuthUserData } from "./auth-reducer";

const ACTION_CONST = {
    SET_INITIALIZED_SUCCESS: 'APP_REDUCER_SET_INITIALIZED_SUCCESS',
}

export type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: { type: any; }): InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof ACTION_CONST.SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({ type: ACTION_CONST.SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());

    promise.then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;