import React from 'react'
import { Link } from '@reach/router'
import checkToken from '../../../../helpers/checkToken'

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
                <h2>Welcome to investor pages!</h2>
                <nav>
                    <Link to={'/investor'}>Homepage</Link>
                    <Link to={'buy'}>Buy</Link>
                    <Link to={'settings'}>Settings</Link>
                </nav>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default RootInvestor