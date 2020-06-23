import React from 'react'
import App from 'components/App'

import Root from 'Root'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' //To have extra methods like: toBeInTheDocument()

beforeEach(() => {
    // Need to add Redux wrap here to work
    render(<Root><App /></Root>);
})

// First sections ->
// it('shows a comment box', () => {
//     const { getByText } = render(<App />); // Return as baseElement, default document.body
//     const component = getByText(/comment box/i);
//     /*OR
//     render(<App />);
//     const component = screen.getByText(/comment box/i);
//     */
//     expect(component).toBeInTheDocument();
// })

//Result
it('shows a comment box', () => {
    // Shouldn't check if your child component is rendered or not because
    // it's testing implementation details which react testing library doesn't encourage you to do.

    // Let's check existence of element with provided data-test-id
    // It's work, because of props passing!

     
    const component = screen.getByTestId('comment_box');
    expect(component).toBeInTheDocument();
})

it('shows a comment list', () => {
    
    const component = screen.getByTestId('comment_list');
    expect(component).toBeInTheDocument();
})