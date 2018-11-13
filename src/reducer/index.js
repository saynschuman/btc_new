import { combineReducers } from 'redux'
import loginInvestor from '../modules/loginInvestor'
import investorHomePageData from '../modules/investorHomePageData'

export default combineReducers({
  loginInvestor,
  investorHomePageData,
})
