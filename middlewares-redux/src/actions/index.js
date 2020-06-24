import axios from 'axios'

import { SAVE_COMMENT, FETCH_COMMENTS, DELETE_COMMENT, CHANGE_AUTH } from 'actions/types'

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    // We load all promise to redux, which is resolved by redux-promise middleware
    // Problem with error handling :<
    const res = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: res
    }
}

export const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        payload: comment
    }
}

export const changeAuth = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}