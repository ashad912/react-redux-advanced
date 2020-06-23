import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // To have extra methods like: toBeInTheDocument()

import Root from 'Root'
import App from 'components/App'

const server = setupServer(
    rest.get('http://jsonplaceholder.typicode.com/comments', (req, res, ctx) => {
      return res(
          ctx.json([{name: 'Fetched #1'}, {name: 'Fetched #2'}]),
          ctx.status(200)
        )
    })
)

// establish API mocking before all tests
beforeAll(() => server.listen())



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

})

// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())


// clean up once the tests are done
afterAll(() => server.close())




