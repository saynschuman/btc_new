import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import loginInvestor from "../modules/loginInvestor"
import toggleMenu from "../modules/toggleMenu"
import investorHomePageGetData from "../modules/investorHomePageGetData"
import getCourse from "../modules/getCourse"
import getCourses from "../modules/getCourses"
import reports from "../modules/reports"
import settings from "../modules/settings"
import showPopups from "../modules/showPopups"
import hashRatePrice from "../modules/hashRatePrice"

export default combineReducers({
  form,
  loginInvestor,
  toggleMenu,
  investorHomePageGetData,
  getCourse,
  getCourses,
  reports,
  settings,
  showPopups,
  hashRatePrice
})
