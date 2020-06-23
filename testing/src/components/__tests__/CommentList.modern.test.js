import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // To have extra methods like: toBeInTheDocument()

import Root from 'Root'
import CommentList from 'components/CommentList'

beforeEach(() => {
    
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    const {container} = render(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )

    screen.container = container
})

it('creates one LI per comment', () => {
    expect(screen.getAllByRole('comment').length).toEqual(2)
})

it('shows the text for each comment', () => {
    expect(screen.getByRole('comment_list')).toHaveTextContent('Comment 1')
    expect(screen.getByRole('comment_list')).toHaveTextContent('Comment 2')
})