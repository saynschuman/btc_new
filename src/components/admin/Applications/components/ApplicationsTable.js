import React from "react";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

export default props => {
  return (
    <tr>
      <td className={"blue"}>{props.timeDate}</td>
      <td>{props.investorId}</td>
      <td>{props.investitionId}</td>
      <td>{props.name}</td>
      <td>{props.surName}</td>
      <td>{props.leftInvest}</td>
      <td className={"blue"}>{props.reqValue}</td>
      <td className={"blue"}>{props.cost}</td>
      <td className={"green"}>{props.summ}</td>
      <td>{props.idAdmAplied}</td>
      <td>
        <CustomCheckbox checked={props.accept} />
      </td>
      <th>
        <div className="close-button-admin" />
      </th>
    </tr>
  );
};
