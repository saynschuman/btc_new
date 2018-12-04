import React from 'react'
import css from './index.module.css'
import classNames from 'classnames'

export default props => {
  return (
    <div className={classNames(css.mainContainer, 'clearfix')}>
      <div>{props.children}</div>
    </div>
  )
}
