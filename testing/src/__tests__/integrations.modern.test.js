import React from 'react'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'


import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // To have extra methods like: toBeInTheDocument()

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
})

it('can fetch a list of comments and display them', async () => {

    const {container} = render(
        <Root>
            <App/>
        </Root>
    )

    screen.container = container
   
    fireEvent.click(screen.getByRole('fetch'))

    await waitFor(() => screen.getAllByRole('comment'))

    expect(screen.getAllByRole('comment').length).toEqual(2)
    // moxios.wait(() => {
    //     wrapped.update()
    //     expect(wrapped.find('li').length).toEqual(2)
    //     done()
    //     wrapped.unmount()
    // })


})


afterEach(() => {
    moxios.uninstall()
})