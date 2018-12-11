import React from "react"
import "./AuthForm.scss"
import connect from "react-redux/es/connect/connect"
import { authData } from "../../actions"
import { successLoginAdmin } from "../../modules/successLoginAdmin"
import LoginHeader from "../commmon/LoginHeader/LoginHeader"
import WongData from "../commmon/WrongData/WrongData"

class AuthForm extends React.Component {
  componentDidMount() {
    this.props.token && this.props.successLoginAdmin(this.props.token)
  }
  componentDidUpdate() {
    this.props.token &&
      this.props.successLoginAdmin &&
      window.location.replace("/admin")
  }
  state = {
    id: "",
    password: ""
  }
  handleId = value => {
    this.setState({
      id: value
    })
  }
  handlePassword = value => {
    this.setState({
      password: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.authData(this.state)
    this.setState({
      id: "",
      password: ""
    })
  }

  render() {
    const { isLoaded, isLoading } = this.props
    return (
      <div>
        <LoginHeader />
        <div className="loginWrapper">
          <div className="logintop">
            <div className="container">Войдите в свой профиль ниже</div>
          </div>
          <div className="loginmain">
            <form className="container">
              <label htmlFor="id">ID администратора</label>
              <input
                name="id"
                id="id"
                onChange={e => this.handleId(e.target.value)}
                type="text"
                autoComplete="off"
                value={this.state.id}
              />
              <label htmlFor="password">Пароль</label>
              <input
                name="password"
                id="password"
                onChange={e => this.handlePassword(e.target.value)}
                type="password"
                autoComplete="off"
                value={this.state.password}
              />
              <input onClick={this.handleSubmit} type="submit" value={"Вход"} />
              {isLoading && !isLoaded && <div className="loader" />}
              <a className="forgotLink" href="/">
                Забыли пароль?
              </a>
            </form>
          </div>
        </div>

        {this.props.success && <WongData success={this.props.success} />}
        {this.props.success !== null && this.props.success !== true && (
          <WongData success={this.props.success} />
        )}
        {/* {this.props.success !== null &&
          this.props.success &&
          window.location.reload()} */}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.authData.isLoading,
      isLoaded: state.authData.isLoaded,
      success: state.authData.success,
      successLoginAdmin: state.successLoginAdmin.successLoginAdmin
    }
  },
  { authData, successLoginAdmin }
)(AuthForm)
