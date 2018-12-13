import React from "react"
import css from "./index.module.scss"
import ButtonBlueCommon from "../../../../../../common/general/ButtonBlueCommon/ButtonBlueCommon"
import { changePassword } from "../../../../../../../store/modules/settings"
import { connect } from "react-redux"

class SettingsForm extends React.Component {
  state = {
    oldPassword: "",
    newPassword: ""
  }
  handleOldPassword = value => {
    this.setState({
      oldPassword: value
    })
  }
  handleNewPassword = value => {
    this.setState({
      newPassword: value
    })
  }
  handleSubmit = () => {
    this.props.changePassword(this.state)
    this.setState({
      oldPassword: "",
      newPassword: ""
    })
  }
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldsetLeft}>
            <label htmlFor="">Новый пароль</label>
            <input
              className={css.cutInput}
              onChange={e => this.handleNewPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className={css.fieldsetRight}>
            <label htmlFor="">Старый пароль</label>
            <input
              className={css.cutInput}
              onChange={e => this.handleOldPassword(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className={css.submit}>
          <ButtonBlueCommon onClick={this.handleSubmit} text={"Сохранить"} />
        </div>
      </form>
    )
  }
}

export default connect(
  null,
  { changePassword }
)(SettingsForm)
