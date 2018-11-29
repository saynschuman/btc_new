import React from 'react'
import Cookies from 'universal-cookie'
import {
  loginInvestor,
  closeModal,
} from '../../../../store/modules/loginInvestor'
import { connect } from 'react-redux'
import {
  LoginInvestorParams,
  UserToken,
  LoginInvestor,
  default as IStore,
} from '../../../../store/storeTypes'

const cookies = new Cookies()

interface IOwnProps {
  default: boolean
}

interface IStateProps {
  email: string
  password: string
}

type IStoreProps = LoginInvestor

interface IDispatchProps {
  loginInvestor: (state: LoginInvestorParams) => UserToken
  closeModal: (close) => void
}

type Props = IOwnProps & IDispatchProps & IStoreProps

class Login extends React.Component<Props, IStateProps> {
  login = () => {
    cookies.set('token', '111', { expires: new Date(Date.now() + 10000 * 60) })
    window.location.replace('/investor')
  }
  state = {
    email: '',
    password: '',
  }
  handleEmail = value => {
    this.setState(
      (): { email: string } => {
        return {
          email: value,
        }
      }
    )
  }
  handlePassword = value => {
    this.setState(
      (): { password: string } => {
        return {
          password: value,
        }
      }
    )
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.loginInvestor({
      email: this.state.email,
      password: this.state.password,
    })
    this.setState(
      (): IStateProps => {
        return {
          email: '',
          password: '',
        }
      }
    )
  }
  render() {
    return (
      <div>
        <div className="loginWrapper">
          <div className="logintop">
            <div className="container">Вход Инвестора</div>
          </div>
          <div className="loginmain">
            <form className="container">
              <input
                name="id"
                id="id"
                onChange={e => this.handleEmail(e.target.value)}
                type="text"
                autoComplete="off"
                value={this.state.email}
                placeholder={'Email'}
              />
              <input
                name="password"
                id="password"
                onChange={e => this.handlePassword(e.target.value)}
                type="password"
                autoComplete="off"
                value={this.state.password}
                placeholder={'Пароль'}
              />
              <input onClick={this.handleSubmit} type="submit" value={'Вход'} />
              {this.props.showError && (
                <div style={{ color: 'red' }}>
                  Неверный Логин или пароль{' '}
                  <span
                    onClick={this.props.closeModal}
                    style={{ fontSize: 30, cursor: 'pointer' }}
                  >
                    X
                  </span>
                </div>
              )}
              <a className="forgotLink" href="/">
                Забыли пароль?
              </a>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore): LoginInvestor => {
  return {
    isLoading: state.loginInvestor.isLoaded,
    isLoaded: state.loginInvestor.isLoaded,
    isLogged: state.loginInvestor.isLogged,
    showError: state.loginInvestor.showError,
  }
}

const mapDispatchToProps = (dispatch): IDispatchProps => {
  return {
    loginInvestor: params => dispatch(loginInvestor.action(params)),
    closeModal: close => dispatch(closeModal(close)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
