import React from "react"

export default props => {
  return (
    <React.Fragment>
      {props.data && (
        props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.datePurchased}</td>
            <td>{item.durationMonth}</td>
            <td>{item.hashRatePrice}</td>
            <td>{item.originalHashRate}</td>
            <td>{item.coefficient}</td>
            <td>{item.sold}</td>
          </tr>
        )))}
    </React.Fragment>
  )
}
