import React from 'react'

// export default (props) => {
//     return <div {...props}>Comment Box</div>
// }

export default class CommentBox extends React.Component {

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

        this.setState({
            comment: ''
        })
    }

    render() {
        // For shallow testing (react-testing-library) data-testid is 'form'.
        // Testing App.js component causes overwriting (prop passing) data-testid by 'comment_box' value.
        // All tests pass.
        return(
            <form data-testid='form' {...this.props} onSubmit={this.handleSubmit} >
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
        )
    }
}