import React from 'react'
import css from './index.module.css'

export default props => {
  return (
    <div className={css.block}>
      <div className={css.header}>
        <div className={css.title}>{props.title}</div>
        {props.icon && <img className={css.img} src={props.icon}  alt={''}/>}
      </div>
      <div className={css.body}>{props.children}</div>
    </div>
  )
}
