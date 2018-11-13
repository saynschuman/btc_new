import React from 'react'
import css from './SettingsFormPhone.module.css'
import ButtonBlueCommon from '../ButtonBlueCommon/ButtonBlueCommon'

class SettingsForm extends React.Component {
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldset}>
            <label htmlFor="">Номер телефона</label>
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
