import React from "react"
import css from "./SettingsFormPersonal.module.css"
import ButtonBlueCommon from "../../../../../../common/general/ButtonBlueCommon/ButtonBlueCommon"
import connect from "react-redux/es/connect/connect"
import { setInfo } from "../../../../../../../store/modules/settings"

class SettingsForm extends React.Component {
  state = {
    name: "",
    surname: ""
  }
  handleName = value => {
    this.setState({
      name: value
    })
  }
  handleSurname = value => {
    this.setState({
      surname: value
    })
  }
  handleSubmit = () => {
    this.props.setInfo(this.state)
    this.setState({
      name: "",
      surname: ""
    })
  }
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldsetLeft}>
            <label htmlFor="">
              Фамилия{" "}
              <div className={css.span}>(Можно изменить только 1 раз)</div>
            </label>
            <input
              className={css.cutInput}
              type="text"
              onChange={e => this.handleSurname(e.target.value)}
            />
          </div>
          <div className={css.fieldsetRight}>
            <label htmlFor="">
              Имя <div className={css.span}>(Можно изменить только 1 раз)</div>
            </label>
            <input
              className={css.cutInput}
              type="text"
              onChange={e => this.handleName(e.target.value)}
            />
          </div>
        </div>
        <div className={css.submit}>
          <ButtonBlueCommon
            onClick={this.handleSubmit}
            text={"Сохранить"}
          />
        </div>
      </form>
    )
  }
}

export default connect(
  null,
  { setInfo }
)(SettingsForm)
