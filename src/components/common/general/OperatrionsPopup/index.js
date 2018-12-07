import React from "react"
import css from "./index.module.scss"

const Index = props => {
  const { header } = props
  return (
    <div className={css.wrapper}>
      <div className={css.inner}>
        <div className={css.header}>{header}</div>
        <div className={css.body}>{props.children}</div>
      </div>
      <div className={css.frame} />
    </div>
  )
}

export default Index
