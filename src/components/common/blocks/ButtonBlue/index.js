import React from "react"
import css from "./index.module.css"
export default props => (
  <div className={css.button}>
    {props.text}
    {props.info && (
      <div
        className={css.info}
        data-info={
          "Тестирование — это очень важный этап разработки удобных цифровых продуктов"
        }
      />
    )}
  </div>
)
