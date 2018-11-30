import React from "react";

class InvestitionsReport extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.date}</td>
        <td>{this.props.investorId}</td>
        <td>{this.props.name}</td>
        <td> {this.props.surName}</td>
        <td className={"green"}>{this.props.startSumm}</td>
        <td className={"blue"}>{this.props.leftInv}</td>
        <td>{this.props.koef}</td>
        <td>{this.props.dateEnd}</td>
        <td className={"green"}>{this.props.alreadyPayed}</td>
      </tr>
    );
  }
}

export default InvestitionsReport;
