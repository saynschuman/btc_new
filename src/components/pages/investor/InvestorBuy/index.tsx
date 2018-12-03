import React from 'react'
import checkToken from '../../../../helpers/checkToken'

interface OwnProps {
    path: string
}

class InvestorBuy extends React.Component<OwnProps> {
    componentDidMount(): void {
        checkToken()
    }
    public render(): JSX.Element {
        return (
            <div>
                Investor buy
            </div>
        )
    }
}

export default InvestorBuy