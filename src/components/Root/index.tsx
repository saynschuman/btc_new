import React from 'react'
import { Router } from '@reach/router'
import Login from '../../components/pages/investor/Login'
import InvestorHomePage from '../../components/pages/investor/InvestorHomePage'
import InvestorBuy from '../../components/pages/investor/InvestorBuy'
import InvestorSettings from '../../components/pages/investor/InvestorSettings'
import RootInvestor from '../../components/pages/investor/RootInvestor'

const Root: React.FunctionComponent = () => {
    return (
        <Router primary={false}>
            <Login default />
            <RootInvestor path="investor">
                <InvestorHomePage default />
                <InvestorBuy path="buy" />
                <InvestorSettings path="settings" />
            </RootInvestor>
        </Router>
    )
}

export default Root