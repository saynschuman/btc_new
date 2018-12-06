import React from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import css from "../../index.module.scss"
import { TableHeader } from "../../../../../../common/general/CustomTable"
import ActiveInvestTableBody from "./ActiveInvestTableBody"
import { mockData } from "../../../../../../../mocks"
import HistoryInvestTableBody from "./HistoryInvestTableBody"
import Block from "../../../../../../common/investor/blocks/Block"
import PurseTableBody from "./PurseTableBody"
import "react-perfect-scrollbar/dist/css/styles.css"

const purseHeaders = ["Дата", "Адрес", "Сумма", "Тип операций", "Статус (?)"]

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
    <div className={css.desktop}>
      <PerfectScrollbar>
        <div className={css.tableWrapper}>
          {props.investors && (
            <table className={css.customTable}>
              <tbody>
                <TableHeader items={activeHeaders} />
                <ActiveInvestTableBody data={mockData} buttonText={"Продать"} />
              </tbody>
            </table>
          )}
          {props.investitions && (
            <table className={css.customTable}>
              <tbody>
                <TableHeader items={historyHeaders} />
                <HistoryInvestTableBody data={mockData} />
              </tbody>
            </table>
          )}
        </div>
      </PerfectScrollbar>
      <div style={{ marginTop: 40 }}>
        <Block title={"История операций личного кошелька"}>
          <PerfectScrollbar>
            <div className={css.tableWrapper}>
              <table className={css.customTable}>
                <tbody>
                  <TableHeader items={purseHeaders} />
                  <PurseTableBody data={mockData} />
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </Block>
      </div>
    </div>
  )
}
