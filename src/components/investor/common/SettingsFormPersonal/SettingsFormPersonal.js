import React from 'react'
import css from './SettingsFormPersonal.module.css'
import ButtonBlueCommon from '../ButtonBlueCommon/ButtonBlueCommon'

class SettingsForm extends React.Component {
  render() {
    return (
      <form className={css.settingsFrom}>
        <div className={css.fields}>
          <div className={css.fieldsetLeft}>
            <label htmlFor="">
              Фамилия <div className={css.span}>(Можно изменить только 1 раз)</div>
            </label>
            <input type="text" />
          </div>
          <div className={css.fieldsetRight}>
            <label htmlFor="">
              Имя <div className={css.span}>(Можно изменить только 1 раз)</div>
            </label>
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
