import React from "react";

class InvestorReportMobile extends React.Component {
  state = {
    singleReportMobileVisible: false
  };
  showReport = () => {
    this.setState({
      singleReportMobileVisible: !this.state.singleReportMobileVisible
    });
  };
  closeReport = () => {
    this.setState({
      singleReportMobileVisible: false
    });
  };
  render() {
    return (
      <div className={"settings-table-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>ID инвестора</td>
              <td>{this.props.id}</td>
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
              <td>Общая мощность инвестора в данный момент (TH/s)</td>
              <td>{this.props.power}</td>
            </tr>
            <tr>
              <td>Выплачено всего</td>
              <td>{this.props.payed}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{this.props.phone}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{this.props.email}</td>
            </tr>
          </tbody>
        </table>
        <button className={"edit-admin-button"} onClick={this.showReport}>
          Посмотреть
        </button>
        {this.state.singleReportMobileVisible && (
          <div className="singleInvestor singleInvestorMobile">
            <div className="singleInvestorInner">
              <div onClick={this.closeReport} className="close-modal">
                <div className="close-button-admin" />
              </div>
              <div className="header">
                <div className="title">
                  Инвестор: <br />
                  {this.props.name} <span>ID: {this.props.id}</span>
                </div>
              </div>
              <div className="body">
                <div className={"settings-table-mobile"}>
                  <table className={"settings-table reports-table"}>
                    <tbody>
                      <tr>
                        <td>Дата операции</td>
                        {/* <td>05.06.2018</td> */}
                      </tr>
                      <tr>
                        <td>Тип</td>
                        {/* <td>Продажа</td> */}
                      </tr>
                      <tr>
                        <td>Курс BTC в момент операции</td>
                        {/* <td>2.4346236243</td> */}
                      </tr>
                      <tr>
                        <td>Цена единицы мощности (BTC)</td>
                        {/* <td>32315</td> */}
                      </tr>
                      <tr>
                        <td>Объем операции (BTC)</td>
                        {/* <td className={"blue"}>4.135342113</td> */}
                      </tr>
                      <tr>
                        <td>Стоимость операции (BTC)</td>
                        {/* <td className={"green"}>4.135342113</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="footer">
                <div className="col col-50 border-right">
                  <div className="footer-top">
                    <div className="footer-title title-light">
                      Общая мощность инвестора на текущий момент
                    </div>
                    <div className="footer-bottom">{this.props.power}</div>
                  </div>
                </div>
                <div className="col col-50">
                  <div className="footer-title title-money">
                    Выплачено всего (BTC)
                  </div>
                  <div className="footer-bottom">{this.props.payed}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InvestorReportMobile;
