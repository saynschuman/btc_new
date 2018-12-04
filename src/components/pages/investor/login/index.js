import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, formValueSelector, Field } from "redux-form"
import {
  loginInvestor,
  hidePopup
} from "../../../../store/modules/loginInvestor"
import checkLog from "../../../../helpers/checkLog"
import css from "./index.module.scss"

class Index extends Component {
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

  render() {
    const isValid =
      this.props.email && this.props.password
    return (
      <div>
        <div className={css.loginHeader} />
        <div className={css.loginWrapper}>
          <div className={css.logintop}>
            <div className={css.container}>Вход Инвестора</div>
          </div>
          <div className={css.loginmain}>
            <form className={css.container}>
              <Field name={"email"} component={"input"} type={"text"} />
              <Field name={"password"} component={"input"} type={"password"} />
              <input
                onClick={this.login}
                type="submit"
                disabled={!isValid}
                value={"Вход"}
              />
              {this.props.isLoading && !this.props.isLoaded && (
                <div className={css.loader} />
              )}
              <a className={css.forgotLink} href="/">
                Забыли пароль?
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("login")
  const email = selector(state, "email")
  const password = selector(state, "password")
  const isLoading = state.loginInvestor.isLoading
  const isLoaded = state.loginInvestor.isLoaded
  const showError = state.loginInvestor.showError
  return {
    email,
    password,
    isLoading,
    isLoaded,
    showError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginInvestor: data => dispatch(loginInvestor(data)),
    hidePopup: () => dispatch(hidePopup())
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
