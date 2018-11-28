import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

interface OwnProps {
    default: boolean
}

class Login extends React.Component<OwnProps> {
    login = () => {
        cookies.set('token', '111', {expires: new Date(Date.now() + 10000 * 2)})
        window.location.replace('/investor')
    }
    render() {
        return (
            <span onClick={this.login}>login</span>
        )
    }
}

export default Login