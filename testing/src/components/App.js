import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

export default () => {
    return (
        <div>
            <CommentBox data-testid="comment_box"/>
            <CommentList data-testid="comment_list"/>
        </div>
    )
}