import React from 'react'
import css from './aside.module.css'

export default props => {
  return <div className={css.aside}>{props.children}</div>
}
