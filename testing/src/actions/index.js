import axios from 'axios'

import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

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