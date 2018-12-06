import React from "react"
import BlockCenter from "./components/BlockCenter"
import SettingsFormPassword from "./components/SettingsFormPassword"
import SettingsFormPersonal from "./components/SettingsFormPersonal/SettingsFormPersonal"
import SettingsFormPhone from "./components/SettingsFormPhone/SettingsFormPhone"
import Popup from "../../../../../components/common/general/Popup"
import { connect } from "react-redux"

const Index = props => {
  return (
    <div>
      <BlockCenter title={"Безопасность"}>
        <SettingsFormPassword />
      </BlockCenter>
      <BlockCenter title={"Личный данные"}>
        <SettingsFormPersonal />
      </BlockCenter>
      <BlockCenter title={"Телефон"}>
        <SettingsFormPhone />
      </BlockCenter>
      {props.logged === "OK" && <Popup color={"green"} text={"Отредактировано"} />}
      {props.logged === "Bad Request" && <Popup color={"red"} text={"Ошибка"} />}
      {props.infoChanged === "OK" && <Popup color={"green"} text={"Отредактировано"} />}
      {props.infoChanged === "Bad Request" && <Popup color={"red"} text={"Ошибка"} />}
    </div>
  )
}

export default connect(state => {
  return {
    logged: state.settings.statusText,
    infoChanged: state.settings.infoChangeText
  }
})(Index)
