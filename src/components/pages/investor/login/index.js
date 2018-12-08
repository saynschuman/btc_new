import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, formValueSelector, Field } from "redux-form"
import {
  loginInvestor,
  hidePopup,
  forgot
} from "../../../../store/modules/loginInvestor"
import checkLog from "../../../../helpers/checkLog"
import css from "./index.module.scss"
import Popup from "../../../../components/common/general/Popup"

class Index extends Component {
  state = {
    isSignIn: true
  }
  componentDidMount() {
    checkLog()
    document.addEventListener("keydown", this.escFunction, false)
  }
  escFunction = event => {
    if (event.keyCode === 27) {
      this.props.hidePopup()
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false)
  }
  exit = () => {
    this.props.hidePopup()
  }
  login = e => {
    e.preventDefault()
    const data = {
      email: this.props.email,
      password: this.props.password
    }
    this.props.loginInvestor(data)
  }
  forgot = e => {
    e.preventDefault()
    const data = {
      email: this.props.restore
    }
    this.props.forgot(data)
  }
  handleForgot = e => {
    e.preventDefault()
    this.setState({
      isSignIn: !this.state.isSignIn
    })
  }
  render() {
    const isValid = this.props.email && this.props.password
    const restoreValid = this.props.restore
    return (
      <div>
        <div className={css.loginHeader} />
        <div className={css.loginWrapper}>
          <div className={css.logintop}>
            <div className={css.container}>
              {this.state.isSignIn ? "Вход инвестора" : "Восстановление пароля"}
            </div>
          </div>
          <div className={css.loginmain}>
            <form className={css.container}>
              {this.state.isSignIn ? (
                <div>
                  <Field name={"email"} component={"input"} type={"text"} />
                  <Field
                    name={"password"}
                    component={"input"}
                    type={"password"}
                  />
                  <input
                    onClick={this.login}
                    type="submit"
                    disabled={!isValid}
                    value={"Вход"}
                  />
                </div>
              ) : (
                <div>
                  <Field
                    name={"restore"}
                    placeholder={"Введите Ваш email"}
                    component={"input"}
                    type={"text"}
                  />
                  <input
                    onClick={this.forgot}
                    type="submit"
                    disabled={!restoreValid}
                    value={"Отправить"}
                  />
                </div>
              )}
              {this.props.isLoading && !this.props.isLoaded && (
                <div className={css.loader} />
              )}
              <a
                onClick={this.handleForgot}
                className={css.forgotLink}
                href="/"
              >
                {this.state.isSignIn ? "Забыли пароль" : "Войти"}
              </a>
            </form>
          </div>
        </div>
        {this.props.showError && (
          <div className={css.wrongData}>
            <div>Неверный ID или пароль</div>
            <span onClick={this.exit} className={css.closeWrong} />
          </div>
        )}
        {this.props.sent && this.props.showOk && <Popup color={"green"} text={"Проверьте почту"} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("login")
  const email = selector(state, "email")
  const password = selector(state, "password")
  const restore = selector(state, "restore")
  const isLoading = state.loginInvestor.isLoading
  const sent = state.loginInvestor.sent
  const isLoaded = state.loginInvestor.isLoaded
  const showError = state.loginInvestor.showError
  const showOk = state.loginInvestor.showOk
  return {
    email,
    password,
    restore,
    isLoading,
    isLoaded,
    showError,
    sent,
    showOk
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginInvestor: data => dispatch(loginInvestor(data)),
    hidePopup: () => dispatch(hidePopup()),
    forgot: data => dispatch(forgot(data))
  }
}

export default reduxForm({
  form: "login"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)
)
