import React from 'react'

import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'

let wrapped
beforeEach(() => {
    // Mount needs unmounting!
    wrapped = mount(<CommentBox />) // wrapped = component
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
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