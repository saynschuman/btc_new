import React from "react"
import css from "./index.module.scss"

export const TableHeader = props => {
  return (
    <tr>
      {props.items.map((item, index) => {
        function createMarkup() {
          return { __html: item }
        }
        return <th key={index} dangerouslySetInnerHTML={createMarkup()} />
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
