import { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../actions';

const initialState = {
    friend: [],
    isLoggingIn: false
}

const reducer = (state = initialState, action) => {
    console.log("Help! I'm in the reducer!", action, state)
}

export default reducer;