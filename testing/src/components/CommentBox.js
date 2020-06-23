import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

// export default (props) => {
//     return <div {...props}>Comment Box</div>
// }

class CommentBox extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.saveComment(this.state.comment)

        this.setState({
            comment: ''
        })
    }

    render() {
    
        // For shallow testing (react-testing-library) data-testid is 'form'.
        // Testing App.js component causes overwriting (prop passing) data-testid by 'comment_box' value.
        // All tests pass.
        return(
            <div>
                <form data-testid={this.props['data-testid'] ? this.props['data-testid'] : 'form'} onSubmit={this.handleSubmit} >
                    <h4>Add a comment</h4>
                    <textarea 
                        data-testid='comment_textarea'
                        name="comment" 
                        value={this.state.comment} 
                        cols="30" 
                        rows="10" 
                        onChange={this.handleChange}
                    />
                    <div>
                        <button data-testid='submit_button'>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" role="fetch" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox)