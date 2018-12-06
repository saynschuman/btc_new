import React from "react"

export default props => {
  const { buttonText } = props
  return (
    <React.Fragment>
      {props.data.length > 0 &&
        props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.datePurchased}</td>
            <td>{item.durationMonth}</td>
            <td>{item.hashRatePrice}</td>
            <td>{item.originalHashRate}</td>
            <td>{item.coefficient}</td>
            <td>{item.sold}</td>
            <td>
              <button>{buttonText}</button>
            </td>
          </tr>
        ))}
    </React.Fragment>
  )
}
