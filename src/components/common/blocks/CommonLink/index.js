import React from 'react'
import css from './index.module.css'

export default props => <div className={css.link}>Адрес: {props.children}</div>
