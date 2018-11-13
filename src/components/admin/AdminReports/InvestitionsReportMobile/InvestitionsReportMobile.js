import React from "react";

class InvestitionsReportMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile investitions-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>ID инвестиции</td>
              <td>{this.props.id}</td>
            </tr>
            <tr>
              <td>Дата инвестиции</td>
              <td>{this.props.date}</td>
            </tr>
            <tr>
              <td>ID инвестора</td>
              <td>{this.props.investorId}</td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>{this.props.name}</td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{this.props.surName}</td>
            </tr>
            <tr>
              <td>Начальная сумма инвестиций</td>
              <td>{this.props.startSumm}</td>
            </tr>
            <tr>
              <td>Остаток инвестиций</td>
              <td>{this.props.leftInv}</td>
            </tr>
            <tr>
              <td>Коэфф. начисления</td>
              <td>{this.props.koef}</td>
            </tr>
            <tr>
              <td>Дата окончания инвестиций</td>
              <td>{this.props.dateEnd}</td>
            </tr>
            <tr>
              <td>Уже начислено по данной инвестиции</td>
              <td>{this.props.alreadyPayed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InvestitionsReportMobile;
