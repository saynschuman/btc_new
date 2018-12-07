import React from "react"
import css from "./index.module.css"
import connect from "react-redux/es/connect/connect"
import { showWithdrawal } from "../../../../../store/modules/showPopups"

const Index = props => {
  const handleShowSell = () => {
    props.showWithdrawal()
    window.scrollTo(500, 0);
  }
  return (
    <div className={css.button} onClick={handleShowSell}>
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
}

export default connect(
  null,
  { showWithdrawal }
)(Index)
