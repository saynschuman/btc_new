import React from 'react'
import css from './index.module.css'

export default props => {
  return (
    <div className={css.block}>
      <div className={css.header}>
        <div className={css.title}>{props.title}</div>
        {props.icon && <img className={css.img} src={props.icon} />}
      </div>
      <div className={css.body}>{props.children}</div>
      <div className={css.footer}>
        <div className={css.course}>1BTC = {props.courseBtcUSD}$</div>
        <div className={css.course}>1BTC = {props.courseBtcRUB}P</div>
      </div>
    </div>
  )
}
