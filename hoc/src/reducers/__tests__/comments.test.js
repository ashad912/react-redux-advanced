import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT, DELETE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action)
    expect(newState).toEqual(['New Comment'])
})

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'dasdacozi'})

    expect(newState).toEqual([])

})

it('handles actions of type DELETE_COMMENT', () => {
    const action = {
        type: DELETE_COMMENT,
        payload: 'Comment 1'
    }

    const newState = commentsReducer(['Comment 1'], action)
    expect(newState).toEqual([])
})