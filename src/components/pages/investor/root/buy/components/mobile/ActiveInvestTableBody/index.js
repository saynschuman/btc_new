import React from "react"
import css from "../../../index.module.scss"

export default props => {
  const { buttonText } = props
  return (
      <div className={css.mobileWrapper}>
        <table className={css.mobileTable}>
          <tbody>
            <tr className={css.mobileTableRow}>
              <td>ID инвестора </td>
              <td>{props.datePurchased}</td>
            </tr>
            <tr>
              <td>ID инвестиции </td>
              <td>{props.datePurchased}</td>
            </tr>
          </tbody>
        </table>
        <button className={css.mobileButton}>{buttonText}</button>
      </div>
  )
}
