import React from 'react'
import css from './InvestorPrivateSettings.module.css'
import BlockCenter from '../common/blockCenter'
import SettingsFormPassword from '../common/SettingsFormPassword/SettingsFormPassword'
import SettingsFormPersonal from '../common/SettingsFormPersonal/SettingsFormPersonal'
import SettingsFormPhone from '../common/SettingsFormPhone/SettingsFormPhone'

export default props => {
  return (
    <div className={css.settingsInner}>
      <BlockCenter title={'Безопасность'}>
        <SettingsFormPassword />
      </BlockCenter>
      <BlockCenter title={'Личный данные'}>
        <SettingsFormPersonal />
      </BlockCenter>
      <BlockCenter title={'Телефон'}>
        <SettingsFormPhone />
      </BlockCenter>
    </div>
  )
}
