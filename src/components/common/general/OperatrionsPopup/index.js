import React from "react"
import css from "./index.module.scss"

const Index = props => {
  const { header } = props
  return <div className={css.blackWrapper} style={{ height: document.documentElement.scrollHeight }}>
      <div className={css.wrapper}>
        <div className={css.inner}>
          <div className={css.header}>{header}</div>
          <div className={css.body} style={{ paddingRight: props.paddingRight }}>
            {props.children}
          </div>
        </div>
        <div className={css.frame} />
      </div>
    </div>
}

export default Index
