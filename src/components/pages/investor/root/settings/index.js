import React from "react"
import BlockCenter from "./components/BlockCenter"
import SettingsFormPassword from "./components/SettingsFormPassword"
import SettingsFormPersonal from "./components/SettingsFormPersonal/SettingsFormPersonal"
import SettingsFormPhone from "./components/SettingsFormPhone/SettingsFormPhone"

export default () => {
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
    </div>
  )
}
