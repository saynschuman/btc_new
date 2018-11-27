import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

interface OwnProps {
    path: string
}

class HomePage extends React.Component<OwnProps> {
    componentDidMount(): void {
        window.setInterval(this.checkToken, 1000)
    }
    checkToken = () => {
        if(cookies.get('token') === undefined) {
            window.location.replace('/')
        }
    }
    render(): JSX.Element {
        return (
            <div>You are logged!</div>
        )
    }
}

export default HomePage