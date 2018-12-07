import React from "react"
import css from "./index.module.css"
import { connect } from "react-redux"
import { showInvest } from "../../../../../store/modules/showPopups"

const Index = props => {
  const handleShowInvest = () => {
    props.showInvest()
    window.scrollTo(500, 0);
  }
  return (
    <div className={css.button} onClick={handleShowInvest}>
      {props.text}
      {css.info && (
        <div
          className={css.info}
          data-info={
            "Тестирование — это очень важный этап разработки удобных цифровых продуктов"
          }
        />
      )}
    </div>
  )
}
export default connect(
  null,
  { showInvest }
)(Index)
