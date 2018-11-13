import React from "react";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

class ApplicationsTableMobile extends React.Component {
  render() {
    return (
      <div
        className={
          "settings-table-mobile application-mobile-settings investitions-mobile"
        }
      >
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>Дата и время заявки</td>
              <td>{this.props.timeDate}</td>
            </tr>
            <tr>
              <td>ID инвестора</td>
              <td>{this.props.investorId}</td>
            </tr>
            <tr>
              <td>ID инвестиции</td>
              <td>{this.props.investitionId}</td>
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
              <td>Остаток инвестиций, BTC</td>
              <td>{this.props.leftInvest}</td>
            </tr>
            <tr>
              <td>Запрашиваемый объем мощности на продажу, TH/s</td>
              <td>{this.props.reqValue}</td>
            </tr>
            <tr>
              <td>Цена единицы мощности в момент заявки, BTC</td>
              <td>{this.props.cost}</td>
            </tr>
            <tr>
              <td>Сумма к выплате, BTC</td>
              <td>{this.props.summ}</td>
            </tr>
            <tr>
              <td>ID админ., одобривших заявку</td>
              <td>{this.props.idAdmAplied}</td>
            </tr>
            <tr>
              <td>Акцептировать</td>
              <td>
                <CustomCheckbox checked={this.props.accept} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="close-button-admin-moblie">Удалить</div>
      </div>
    );
  }
}

export default ApplicationsTableMobile;
