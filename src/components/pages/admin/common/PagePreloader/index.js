import React from 'react'
import css from './index.module.scss'

export default () => {
  return (
    <div className={css.preloaderWrapper}>
      <div className={css.preloader} />
    </div>
  )
}
