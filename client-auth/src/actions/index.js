import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from "./types"

export const signup = (credentials, callback) => async (dispatch) => {
    //debugger;
    try{
        const res = await axios.post('/signup', credentials)
        dispatch({ type: AUTH_USER, payload: res.data.token })
        localStorage.token = res.data.token
        callback()
    }catch(e){
        dispatch({ type: AUTH_ERROR, payload: 'Email in use'})
    }
}



export const signout = () => {
    localStorage.removeItem('token')
    return{
        type: AUTH_USER,
        payload: ''
    }
}

export const signin = (credentials, callback) => async (dispatch) => {
    //debugger;
    try{
        const res = await axios.post('/signin', credentials)
        dispatch({ type: AUTH_USER, payload: res.data.token })
        localStorage.token = res.data.token
        callback()
    }catch(e){
        dispatch({ type: AUTH_ERROR, payload: 'Wrong credentials'})
    }
}