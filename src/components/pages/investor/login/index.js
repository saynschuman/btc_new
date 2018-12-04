import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, formValueSelector, Field } from "redux-form"
import { loginInvestor } from "../../../../store/modules/loginInvestor"

class Index extends Component {
  login = () => {
    const data = {
        email: this.props.email,
        password: this.props.password
    }
    console.log(data)
    this.props.loginInvestor(data)
  }

  render() {
    return (
      <div>
        <div>
          <Field name={"email"} component={"input"} />
        </div>
        <div>
          <Field name={"password"} component={"input"} />
          <div>
            <button onClick={this.login}>get props</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("login")
  const email = selector(state, "email")
  const password = selector(state, "password")
  return {
    email,
    password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginInvestor: (data) => dispatch(loginInvestor(data))
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
