import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then( res => {
        localStorage.setItem(
            "token",
            res.data.payload,
            dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.payload })
        )
    } )
    .catch( err => {
        console.log(err)
    } )
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESSFUL = 'FETCH_FRIENDS_SUCCESSFUL';
export const FETCH_FRIENDS_FAILED = 'FETCH_FRIENDS_FAILED';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_FRIENDS_SUCCESSFUL, payload: res.data.data})
    })
    .catch(err => console.log(err))
}
