import React from "react"
import css from "./index.module.css"
import OpertationsPopup from "../../../../components/common/general/OperatrionsPopup"
import CustomInput from "../../../../components/common/general/CustomInput/CustomInput"
import Button from "../../../../components/common/general/Button"
import { hide } from "../../../../store/modules/showPopups"
import { connect } from "react-redux"
import CustomSelect from "../../../../components/common/general/CustomSelect/CustomSelect"

class Aside extends React.Component {
  state = {
    popupIsOpen: false
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false)
  }
  escFunction = event => {
    if (event.keyCode === 27) {
      this.props.hide()
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false)
  }
  render() {
    return (
      <div>
        <div className={css.aside}>{this.props.children}</div>
        {this.props.showInvest && (
          <OpertationsPopup header={"Продать"}>
            <div className={css.small}>Стоимость единицы мощности</div>
            <div className={css.big}>1 TH/s - 1.53534 BTC</div>
            <hr className={css.hr} />
            <div className={css.small}>Остаток по инвестиции</div>
            <div className={css.big}>1.421 TH/s</div>
            <div className={css.small}>
              Количество мощности для продажи, TH/s
            </div>
            <CustomInput width={190} />
            <hr className={css.hr} />
            <div className={css.small}>Итого к получению</div>
            <div className={css.brackets}>
              ( За вычетом комиссии 0.012 BTC )
            </div>
            <div className={css.big}>1.401 TH/s</div>
            <div className={css.small}>Продажа в течени 7 суток</div>
            <div className={css.buttons}>
              <Button
                text={"Купить"}
                marginRight={"20px"}
                width={125}
                height={45}
                background={
                  "linear-gradient(to left, #015ca9 0%, #005aec 100%)"
                }
              />
              <Button
                width={125}
                height={45}
                text={"Отмена"}
                onClick={this.props.hide}
                background={
                  "linear-gradient(to left, #3a09b4 0%, #5400ff 100%)"
                }
              />
            </div>
          </OpertationsPopup>
        )}
        {this.props.showWithdrawal && (
          <OpertationsPopup header={"Вывод"} paddingRight={0}>
            <div className={css.small}>Адрес</div>
            <div className={css.addressInput}>
              <CustomInput value={"Fsdsdrwdefw3t36fgdfgrfgsdrsre23er3f"} />
            </div>
            <div className={css.flex}>
              <div className={css.qw}>
                <div className={css.small}>Сума вывода, BTC</div>
                <CustomInput minWidth={185} width={50} />
              </div>
              <div className={css.qw}>
                <div className={css.small}>Сбор за транзакцию</div>
                <CustomSelect data={rules} value={'Выберите приоритет'}/>
              </div>
            </div>
            <br />
            <div className={css.small}>Итого</div>
            <div className={css.big}>0.221 BTC</div>
            <hr className={css.hr} />
            <br />
            <div className={css.buttons}>
              <Button
                text={"Купить"}
                marginRight={"20px"}
                width={125}
                height={45}
                background={
                  "linear-gradient(to left, #015ca9 0%, #005aec 100%)"
                }
              />
              <Button
                width={125}
                height={45}
                text={"Отмена"}
                onClick={this.props.hide}
                background={
                  "linear-gradient(to left, #3a09b4 0%, #5400ff 100%)"
                }
              />
            </div>
          </OpertationsPopup>
        )}
      </div>
    )
  }
}

const rules = [
  { value: "high", label: "Высокий приоритет" },
  { value: "middle", label: "Средний приоритет" },
  { value: "low", label: "Низкий приоритет" }
];

export default connect(
  state => ({
    showInvest: state.showPopups.showInvest,
    showWithdrawal: state.showPopups.showWithdrawal
  }),
  { hide }
)(Aside)
