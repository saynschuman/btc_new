import React, { Component } from "react"
// import { investorLogin } from "../../../../helpers/login"
import { connect } from "react-redux"
import { reduxForm, formValueSelector, Field } from "redux-form"
import checkValues from '../../../../helpers/checkValues'

class Index extends Component {
  getProps = () => {
    const values = {
      email: this.props.email,
      password: this.props.password
    }
    console.log(checkValues(values, null))
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
            <button onClick={this.getProps}>get props</button>
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

export default reduxForm({
  form: "login"
})(connect(mapStateToProps)(Index))
