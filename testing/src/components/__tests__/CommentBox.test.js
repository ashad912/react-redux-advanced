import React from 'react'

import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'

import Root from 'Root'

let wrapped
beforeEach(() => {
    // Mount needs unmounting!
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    ) // wrapped = component
})

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
    const value = 'new comment'

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { name: 'comment', value}
        })
        wrapped.update()
    })

    it('has a text area that users can type in', () => {
        // Simulate event uses js callback names    
        expect(wrapped.find('textarea').prop('value')).toEqual(value)
    })
    
    it('when the input is submitted, textarea shoud get emptied', () => {
    
        // Clear check requires dummy text
        // const value = 'new comment'
        // wrapped.find('textarea').simulate('change', {
        //     target: { name: 'comment', value}
        // })
        // wrapped.update()
    
        //expect(wrapped.find('textarea').prop('value')).toEqual(value)
    
        wrapped.find('form').simulate('submit')
        wrapped.update()
    
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })

})



afterEach(() => {
    wrapped.unmount()
})