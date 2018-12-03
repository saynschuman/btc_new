import React from 'react'
import { Link } from '@reach/router'
import checkToken from '../../../../helpers/checkToken'
import InvestorHeader from '../../../common/InvestorHeader'

interface OwnProps {
    path: string
}

class RootInvestor extends React.Component<OwnProps> {
    componentDidMount(): void {
        checkToken()
    }
    public render(): JSX.Element {
        return (
            <div>
                <InvestorHeader />
                <br/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default RootInvestor