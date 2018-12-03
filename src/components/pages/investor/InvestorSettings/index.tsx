import React from 'react'
import checkToken from '../../../../helpers/checkToken'

interface OwnProps {
    path: string
}

class InvestorSettings extends React.Component<OwnProps> {
    componentDidMount(): void {
        checkToken()
    }
    public render(): JSX.Element {
        return (
            <div>
                Investor settings
            </div>
        )
    }
}

export default InvestorSettings