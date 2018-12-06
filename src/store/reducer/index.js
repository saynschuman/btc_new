import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import loginInvestor from "../modules/loginInvestor"
import toggleMenu from '../modules/toggleMenu'
import investorHomePageGetData from '../modules/investorHomePageGetData'

export default combineReducers({
  form,
  loginInvestor,
  toggleMenu,
  investorHomePageGetData
})
