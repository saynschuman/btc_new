import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import loginInvestor from "../modules/loginInvestor"

export default combineReducers({
  form,
  loginInvestor
})
