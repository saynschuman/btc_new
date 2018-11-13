import React from 'react'
import './AuthFormInvestor.scss'
import connect from 'react-redux/es/connect/connect'
import { authDataInvestor } from '../../actions'
import LoginHeader from '../../components/commmon/LoginHeader/LoginHeader'
import WongData from '../../components/commmon/WrongData/WrongData'

class AuthFormInvestor extends React.Component {
  componentDidUpdate() {
    this.props.success && window.location.replace('/investor')
  }
  state = {
    id: '',
    password: '',
  }
  handleId = value => {
    this.setState({
      id: value,
    })
  }
  handlePassword = value => {
    this.setState({
      password: value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.authDataInvestor(this.state)
    this.setState({
      id: '',
      password: '',
    })
  }

  render() {
    const { isLoaded, isLoading } = this.props
    return (
      <div>
        <LoginHeader />
        <div className="loginWrapper">
          <div className="logintop">
            <div className="container">Вход Инвестора</div>
          </div>
          <div className="loginmain">
            <form className="container">
              <input
                name="id"
                id="id"
                onChange={e => this.handleId(e.target.value)}
                component="input"
                type="text"
                autoComplete="off"
                value={this.state.id}
                placeholder={'Email'}
              />
              <input
                name="password"
                id="password"
                onChange={e => this.handlePassword(e.target.value)}
                component="input"
                type="password"
                autoComplete="off"
                value={this.state.password}
                placeholder={'Пароль'}
              />
              <input onClick={this.handleSubmit} type="submit" value={'Вход'} />
              {isLoading && !isLoaded && <div className="loader" />}
              <a className="forgotLink" href="/">
                Забыли пароль?
              </a>
            </form>
          </div>
        </div>
        {this.props.success === false && (
          <WongData success={this.props.success} />
        )}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.authData.investorLogIsloading,
      isLoaded: state.authData.investorLogIsloaded,
      success: state.authData.investorSuccess,
    }
  },
  { authDataInvestor }
)(AuthFormInvestor)
