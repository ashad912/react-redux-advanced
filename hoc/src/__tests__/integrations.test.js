import React from 'react'
import moxios from 'moxios'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
})

it('can fetch a list of comments and display them', (done) => {

    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    )
   
    wrapped.find('.fetch-comments').simulate('click')

    // Enzyme does not provide wait for function :<
    
    // setTimeout(() => {
    //     wrapped.update()
    //     expect(wrapped.find('li').length).toEqual(2)
    //     done()
    //     wrapped.unmount()
    // }, 100)

    // Only I can do here to modernize, is to wrap moxios.wait() in promise...
    // So I left it.

    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
        wrapped.unmount()
    })


})


afterEach(() => {
    moxios.uninstall()
})