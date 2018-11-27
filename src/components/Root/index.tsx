import React from 'react'
import { Router } from '@reach/router'
import Login from '../../components/pages/investor/Login'
import HomePage from '../../components/pages/investor/HomePage'

const Root: React.FunctionComponent = () => {
    return (
        <Router primary={false}>
            <Login default />
            <HomePage path={'/homepage'}/>
        </Router>
    )
}

export default Root