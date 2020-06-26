import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import * as actions from '../../actions'

export default () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.signout())
    }, [dispatch])

    return (
        <div>Sorry to see u go</div>
    )
}