import React from "react"
import css from "./index.module.scss"

export const TableHeader = props => {
  return (
    <tr>
      {props.items.map((item, index) => {
        function createMarkup() {
          return { __html: item }
        }
        return <td key={index} dangerouslySetInnerHTML={createMarkup()} />
      })}
    </tr>
  )
}

export const TableBody = props => {
  return (
    <tr>
      {props.data.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  )
}

export const ActiveInvestTableBody = props => {
  const { buttonText } = props
  return (
    <React.Fragment>
      {props.data.map((item, index) => (
        <tr key={index}>
          <td>{item.datePurchased}</td>
          <td>{item.durationMonth}</td>
          <td>{item.hashRatePrice}</td>
          <td>{item.originalHashRate}</td>
          <td>{item.coefficient}</td>
          <td>{item.sold}</td>
          <td><button>{buttonText}</button></td>
        </tr>
      ))}
    </React.Fragment>
  )
}

export default props => {
  return (
    <table className={css.customTable}>
      <tbody>
        <TableHeader>{props.items}</TableHeader>
        <TableBody>{props.data}</TableBody>
      </tbody>
    </table>
  )
}
