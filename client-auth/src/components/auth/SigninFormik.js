import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'

// Setting Yup function outside exported function (used for react issues) is more efficient
// It is defined once

const SigninSchema = Yup.object().shape({
    email: Yup
        .string()
        .required("This is field is required!")
        .email('Must be a valid email!'),
    password: Yup
        .string()
        .required('This field is required!')
        .min(3, 'Must be at least 3 characters!')

})

export default () => {

    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const history = useHistory()

    const handleSubmit = (values) => {
        // In formik, there is no need to use e.preventDefault() (similar to ReduxForm)
        // Formik cares, about taking data from inputs - values argument holds all input key-value pairs
        dispatch(actions.signin(values, () => {
            history.push('/feature')
        }))
    }


    // We can replace form as Form. Form includes handleSubmit and handleReset methods.
    // Field is input, which includes value and onChange, onBlur methods. 
    // Dirty prop is result of compare (shallow) if input have init values
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={SigninSchema}
            >
                {({ handleReset, isValid, dirty }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field autoComplete="off" type="email" name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field autoComplete="off" type="password" name="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <div>{errorMessage}</div>
                        <button type="submit" disabled={!isValid || !dirty}>Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}