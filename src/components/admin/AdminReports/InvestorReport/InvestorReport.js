import React from "react";

class InvestorReport extends React.Component {
  state = {
    singleReportVisible: false
  };
  showReport = () => {
    this.setState({
      singleReportVisible: true
    });
  };
  closeReport = () => {
    this.setState({
      singleReportVisible: false
    });
  };
  render() {
    return (
      <tr>
        <td>
          <div className="long-id">{this.props.id}</div>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.surName}</td>
        <td className={"green"}>{this.props.power}</td>
        <td className={"blue"}>{this.props.payed}</td>
        <td>{this.props.phone}</td>
        <td>
          <div className="long-id">{this.props.email}</div>
        </td>
        <td>
          <button className={"edit-admin-button"} onClick={this.showReport}>
            Посмотреть
          </button>
          {this.state.singleReportVisible && (
            <div className="singleInvestor">
              <div className="singleInvestorInner">
                <div onClick={this.closeReport} className="close-modal">
                  <div className="close-button-admin" />
                </div>
                <div className="header">
                  <div className="title">
                    Инвестор: {this.props.name} <span>ID: {this.props.id}</span>
                  </div>
                </div>
                <div className="body">
                  <table className="settings-table popup-table">
                    <tbody>
                      <tr>
                        <th className={"empty-char"} />
                        <th>Дата операции</th>
                        <th>Тип</th>
                        <th>Курс BTC в момент операции</th>
                        <th>Цена единицы мощности (BTC)</th>
                        <th>Объем операции (BTC)</th>
                        <th>Стоимость операции (BTC)</th>
                      </tr>
                      {/* <tr>
                        <td className={"empty-char"} />
                        <td>05.06.2018 </td>
                        <td>Продажа</td>
                        <td>2.4346236243</td>
                        <td>32315</td>
                        <td className={"blue"}>4.135342113</td>
                        <td className={"green"}>4.135342113</td>
                      </tr>
                      <tr>
                        <td className={"empty-char"} />
                        <td>05.06.2018 </td>
                        <td>Продажа</td>
                        <td>2.4346236243</td>
                        <td>32315</td>
                        <td className={"blue"}>4.135342113</td>
                        <td className={"green"}>4.135342113</td>
                      </tr> */}
                    </tbody>
                  </table>
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
        </td>
      </tr>
    );
  }
}

export default InvestorReport;
