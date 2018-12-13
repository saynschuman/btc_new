import React from "react"
import css from "./SettingsFormPhone.module.css"
import ButtonBlueCommon from "../../../../../../common/general/ButtonBlueCommon/ButtonBlueCommon"
import connect from "react-redux/es/connect/connect"
import { changePhone } from "../../../../../../../store/modules/settings"

class SettingsForm extends React.Component {
  state = {
    phone: ""
  }
  handlePhone = value => {
    this.setState({
      phone: value
    })
  }
  handleSubmit = () => {
    this.props.changePhone(this.state)
    this.setState({
      phone: ""
    })
  }
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldset}>
            <label htmlFor="">Номер телефона</label>
            <input type="text" onChange={e => this.handlePhone(e.target.value)} className={css.cutInput}/>
          </div>
        </div>
        <div className={css.submit}>
          <ButtonBlueCommon text={"Сохранить"} onClick={this.handleSubmit} />
        </div>
      </form>
    )
  }
}

export default connect(
  null,
  { changePhone }
)(SettingsForm)
