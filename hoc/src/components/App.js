import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import * as actions from 'actions'

export default () => {
    // const CommentBoxComponent = <CommentBox data-testid="comment_box"/>
    // const CommentListComponent = <CommentList data-testid="comment_list"/>
    
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const renderButton = () => {
        return(
            <button onClick={() => dispatch(actions.changeAuth(!auth))}>
                {auth ? 'Sign out' : 'Sign in'}
            </button>
        )
    }

    const renderHeader = () => {
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>
                    <Link to="/">{renderButton()}</Link>
                </li>
            </ul>
        )
    }

    return (
        <div>
            {renderHeader()}
            <Route path='/post' render={(props) => <CommentBox {...props} data-testid="comment_box"/>} />
            <Route path='/' exact render={(props) => <CommentList {...props} data-testid="comment_list"/>} />
        </div>
    )
}