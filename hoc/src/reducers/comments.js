import { SAVE_COMMENT, FETCH_COMMENTS, DELETE_COMMENT } from 'actions/types'



export default (state = [], action) => {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload]
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name)
            return [...state, ...comments]
        case DELETE_COMMENT:
            const commentToDelete = action.payload
            const newComments = state.filter((comment) => comment !== commentToDelete)
            return [...newComments]
        default:
            return state
    }
}