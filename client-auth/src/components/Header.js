import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './HeaderStyle.css'

export default () => {

    const authenticated = useSelector(state => state.auth.authenticated)
    
    const renderLinks = () => {
        if (!authenticated) {
            return (
                <React.Fragment>
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/signin'>Sign in</Link>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Link to='/signout'>Sign out</Link>
                    <Link to='/feature'>Feature</Link>
                </React.Fragment>
            )
        }
    }
    return (
        <div className="header">
            <Link to='/'>Redux auth</Link>
            {renderLinks()}
        </div>
    )
}