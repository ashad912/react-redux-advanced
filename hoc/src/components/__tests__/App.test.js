import React from 'react'
//import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from 'components/App'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped
beforeEach(() => {
    wrapped = shallow(<App />) // wwrapped = component
})

// Legacy
// it('shows a comment box', () => {
//     // React environment works correctly in browser.
//     // During tests, we use command line environment, so we need to simulate browser.
//     // Below is fake div, which exists only in memory.
//     // We are telling JSDOM to create new div element
//     // We attend to take React App instance and render it inside this div component.
//     const div = document.createElement('div')

//     ReactDOM.render(<App />, div)

//     // Looks inside the div
//     // and checks to see if the CommentBox is in there
//     // console.log(div.innerHTML)

//     // Poor apporach to tests
//     // expect(div.innerHTML).toContain('Comment Box')

//     // Better approach to tests 
//     // expect(div).toHaveAnInstanceOf(CommentBox) <- it won't work

//     // Removing App component after test. Clean up.
//     ReactDOM.unmountComponentAtNode(div)
// })


it('shows a comment box', () => {
    // Enzyme touches testing implementaion details, unlike react-testing-library does not.
    //const wrapped = shallow(<App />) // wrapped = component

    expect(wrapped.find(CommentBox).length).toEqual(1)
})


it('shows a comment list', () => {
    // Enzyme touches testing implementaion details, unlike react-testing-library does not.
    //const wrapped = shallow(<App />) // wrapped = component

    expect(wrapped.find(CommentList).length).toEqual(1)
})