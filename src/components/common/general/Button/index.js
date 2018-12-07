import React from "react"
import css from "./index.module.scss"

const Index = props => {
  const { background, text } = props
  return (
    <div>
      <button
        className={css.button}
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
        style={{
          background: `${background}`,
          height: `${props.height}px`,
          width: `${props.width}px`,
          marginRight: props.marginRight
        }}
      >
        {text}
      </button>
    </div>
  )
}

export default Index
