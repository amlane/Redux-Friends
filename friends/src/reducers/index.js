import { 
    LOGIN_START, 
    LOGIN_SUCCESSFUL, 
    LOGIN_FAILED,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESSFUL,
    FETCH_FRIENDS_FAILED
} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    isLoggingIn: false,
    isLoggedIn: false,
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
        case LOGIN_SUCCESSFUL:
        return {
            ...state,
            isLoggingIn: false,
            isLoggedIn: true,
            error: ''
        }
        case LOGIN_FAILED:
        return {
            ...state,
            isLoggingIn: false,
            error: ''
        }
        case FETCH_FRIENDS_START:
        return {
            ...state,
            fetchingFriends: true,
            error: false,
            isLoggedIn: true
        }
        case FETCH_FRIENDS_SUCCESSFUL:
        return {
            ...state,
            fetchingFriends: false,
            error: '',
            friends: action.payload,
            isLoggedIn: true
        }
        default:
        return state;
    }
}

export default reducer;