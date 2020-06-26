import React from 'react'
import requireAuth from './requireAuth'


export default requireAuth(() => {
    return (
        <div>This is the feature!</div>
    )
})

