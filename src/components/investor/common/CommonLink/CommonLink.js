import React from 'react'
import css from './CommonLink.module.css'

export default props => <div className={css.link}>Адрес: {props.children}</div>
