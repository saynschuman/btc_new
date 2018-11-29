import React from 'react'
import checkToken from '../../../../helpers/checkToken'

interface OwnProps {
    default: boolean
}

class HomePage extends React.Component<OwnProps> {
    componentDidMount(): void {
        checkToken()
    }
    public render(): JSX.Element {
        return (
            <div>
                Investor Homepage new
            </div>
        )
    }
}

export default HomePage