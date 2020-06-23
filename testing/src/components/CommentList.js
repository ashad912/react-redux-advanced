import React from 'react'
import { connect } from 'react-redux'
// export default (props) => {
//     return <div {...props}>Comment List</div>
// }


const CommentList =  (props) => {

    const renderComments = () => {
        return props.comments.map(comment => {
            return <li role='comment' key={comment}>{comment}</li>
        })
    }

    return (
        <div data-testid={props['data-testid']}>
            <ul role='comment_list'>
                {renderComments()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)