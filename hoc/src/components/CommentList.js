import React from 'react'
import * as actions from 'actions'
import { connect, useSelector, useDispatch } from 'react-redux'

// export default (props) => {
//     return <div {...props}>Comment List</div>
// }


export default (props) => {

    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()

    const renderComments = () => {
        return comments.map((comment, index) => {
            return <li role='comment' key={index} onClick={() => dispatch(actions.deleteComment(comment))}>{comment}</li>
        })
    }
    
    // ES2020 optional chaining
    // console.log(props.noexistantprop?.keepgoing?.ohyes)
    
    return (
        <div>
            <h4>CommentList</h4>
            <ul role='comment_list'>
                {renderComments()}
            </ul>
        </div>
    )
}


// Classic mapStateToProps/mapDispatchToProps version

// const CommentList =  (props) => {

//     const renderComments = () => {
//         return props.comments.map((comment, index) => {
//             return <li role='comment' key={index}>{comment}</li>
//         })
//     }

//     return (
//         <div data-testid={props['data-testid']}>
//             <ul role='comment_list'>
//                 {renderComments()}
//             </ul>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         comments: state.comments
//     }
// }

// export default connect(mapStateToProps)(CommentList)