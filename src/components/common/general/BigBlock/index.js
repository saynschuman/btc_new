import React from 'react'
import css from './index.module.scss'

export default props => {
  const {courseBtcUSD, courseBtcRUB} = props
  return (
    <div className={css.block}>
      <div className={css.header}>
        <div>{props.title}</div>
        {props.icon && <img className={css.img} src={props.icon}  alt={''}/>}
      </div>
      <div>{props.children}</div>
      <div className={css.footer}>
        <div className={css.course}>1BTC = {courseBtcRUB}$</div>
        <div className={css.course}>1BTC = {courseBtcUSD}P</div>
      </div>
    </div>
  )
}
