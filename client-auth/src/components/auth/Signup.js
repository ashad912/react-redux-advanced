import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions'

const Signup = (props) => {

    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const history = useHistory()

    const onSubmit = (credentials) => {
        dispatch(actions.signup(credentials, () => {
            history.push('/feature')
        }))
    }

    const { handleSubmit } = props 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field 
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field 
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"

                />
            </fieldset>
            <div>{errorMessage}</div>
            <button>Sign up!</button>
        </form>
    )
}

export default reduxForm({ form: 'signup'})(Signup)

// compose(
//  connect(null, actions),
//  reduxForm({ form: 'sigup' })
// )(Signup)