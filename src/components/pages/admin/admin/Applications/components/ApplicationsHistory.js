import React from "react";

export default props => {
  return (
    <tr>
      <td className={"blue"}>{props.timeDate}</td>
      <td className={"green"}>{props.timePay}</td>
      <td>{props.investorId}</td>
      <td>{props.investitionId}</td>
      <td>{props.name}</td>
      <td>{props.surName}</td>
      <td className={"blue"}>{props.powerValue}</td>
      <td className={"blue"}>{props.cost}</td>
      <td>{props.idAdmAplied}</td>
      <td className={"green"}>{props.summ}</td>
    </tr>
  );
};
