import { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../actions';

const initialState = {
    friend: [],
    isLoggingIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log("Help! I'm in the reducer!", action, state)
    switch(action.type){
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
        default:
        return state;
    }
}

export default reducer;