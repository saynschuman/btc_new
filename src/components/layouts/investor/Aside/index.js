import React from "react"
import css from "./index.module.css"
import OpertationsPopup from "../../../../components/common/general/OperatrionsPopup"
import CustomInput from "../../../../components/common/general/CustomInput/CustomInput"

class Aside extends React.Component {
  state = {
    popupIsOpen: false
  }
  showPopup = () => {
    this.setState({
      popupIsOpen: true
    })
  }
  render() {
    return (
      <div>
        <div className={css.aside} onClick={this.showPopup}>
          {this.props.children}
        </div>
        {this.state.popupIsOpen && (
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
              <button>Купить</button>
              <button>Продать</button>
            </div>
          </OpertationsPopup>
        )}
      </div>
    )
  }
}

export default Aside
