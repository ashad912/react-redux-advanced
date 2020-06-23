import React from 'react'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // To have extra methods like: toBeInTheDocument()



beforeEach(() => {
    const {container} = render(<Root><CommentBox /></Root>);
    // By default screen object has not access to HTMLElement and regular DOM queries
    // Saving reference to container in screen object
    screen.container = container
})

it('has a text area and a button', () => {    
    expect(screen.getByTestId('submit_button')).toBeInTheDocument();
    expect(screen.getByRole('fetch')).toBeInTheDocument()
    expect(screen.getByTestId('comment_textarea')).toBeInTheDocument();
})
describe('the text area', () => {
    const value = 'new comment'
    let textarea

    beforeEach(() => {
        // Cannot use getByTestId outside beforeEach block - async and order issues
        textarea = screen.getByTestId('comment_textarea')
        fireEvent.change(textarea, {target: { name: 'comment', value}})
    })

    it('has a text area that users can type in', () => {    
        expect(textarea.value).toEqual(value)
    })
    
    it('when the input is submitted, textarea shoud get emptied', () => {
        
        // Manual queries are not advisable - https://testing-library.com/docs/guide-which-query
        // getByRole is advisable way to access HTML element
    
        // const form = screen.container.querySelector('form')

        const form  = screen.getByTestId('form')
        fireEvent.submit(form)

        expect(textarea.value).toEqual('')
    })

})

