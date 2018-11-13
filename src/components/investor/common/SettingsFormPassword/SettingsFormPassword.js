import React from 'react'
import css from './SettingsFormPassword.module.css'
import ButtonBlueCommon from '../ButtonBlueCommon/ButtonBlueCommon'

class SettingsForm extends React.Component {
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldsetLeft}>
            <label htmlFor="">Новый пароль</label>
            <input type="password" />
          </div>
          <div className={css.fieldsetRight}>
            <label htmlFor="">Старый пароль</label>
            <input type="text" />
          </div>
        </div>
        <div className={css.submit}>
          <ButtonBlueCommon text={'Сохранить'} />
        </div>
      </form>
    )
  }
}

export default SettingsForm
