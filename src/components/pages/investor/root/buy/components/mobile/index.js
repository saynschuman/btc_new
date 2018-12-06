import React from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import css from "../../index.module.scss"
import ActiveInvestTableBody from "./ActiveInvestTableBody"
import { mockData } from "../../../../../../../mocks"
import Block from "../../../../../../common/investor/blocks/Block"
import "react-perfect-scrollbar/dist/css/styles.css"

// const purseHeaders = ["Дата", "Адрес", "Сумма", "Тип операций", "Статус (?)"]

const activeHeaders = [
  "Дата входа",
  "Срок",
  "Сумма TH/s",
  `Стоимость до конца <br /> срока (?)`,
  `Коэфициент <br /> начисления`,
  "Выплачено",
  "Продажа (?)"
]

const historyHeaders = [
  "Дата",
  "Срок",
  `Коэфициент <br /> начисления`,
  "Операция",
  "Сумма BTC",
  "Сумма TH/s",
  "Статус (?)"
]

export default props => {
  return (
    <div>
    <div className={css.mobile}>
      <PerfectScrollbar>
        <div className={css.tableWrapper}>
          {props.investors && (
            <div>
              {mockData.map((item, index) => (
                <ActiveInvestTableBody
                  key={index}
                  items={activeHeaders}
                  datePurchased={item.datePurchased}
                  buttonText={"Купить"}
                />
              ))}
            </div>
          )}
          {props.investitions && (
            <div>
              {mockData.map((item, index) => (
                <ActiveInvestTableBody
                  key={index}
                  items={activeHeaders}
                  datePurchased={item.datePurchased}
                  buttonText={"Продать"}
                />
              ))}
            </div>
          )}
        </div>
      </PerfectScrollbar>
      <div className={css.mobile} style={{ marginTop: 40 }}>
        <Block title={"История операций личного кошелька"}>
          <PerfectScrollbar>
            <div className={css.tableWrapper}>
              {mockData.map((item, index) => (
                <ActiveInvestTableBody
                  key={index}
                  items={activeHeaders}
                  datePurchased={item.datePurchased}
                  buttonText={"Продать"}
                />
              ))}
            </div>
          </PerfectScrollbar>
        </Block>
      </div>
    </div>
    </div>
  )
}
