import React from 'react'
import css from './index.module.scss'
import { connect } from 'react-redux'
import { authDataInvestor } from '../../modules/loginInvestor'

class LoginInvestor extends React.Component {
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
    return (
      <div className={css.loginWrapper}>
        <div className={css.logintop}>
          <div className={css.container}>Вход Инвестора</div>
        </div>
        <div className={css.loginmain}>
          <form className={css.container}>
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
            {this.props.isLoading && !this.props.isLoaded && (
              <div className={css.loader} />
            )}
            <a className={css.forgotLink} href="/">
              Забыли пароль?
            </a>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.loginInvestor.isLoading,
      isLoaded: state.loginInvestor.isLoaded,
      success: state.loginInvestor.success,
    }
  },
  { authDataInvestor }
)(LoginInvestor)
