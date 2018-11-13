import React from 'react'
import { Router } from '@reach/router'
import Login from './components/LoginInvestor'
import RootInvestor from './pages/RootInvestor'

export default () => {
  return (
    <Router primary={false}>
      <Login default />
      <RootInvestor path="/investor" />
    </Router>
  )
}
