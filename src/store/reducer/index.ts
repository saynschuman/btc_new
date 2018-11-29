import { combineReducers } from "redux"
import IStore from '../storeTypes'
import loginInvestor from '../modules/loginInvestor'

export default combineReducers<IStore>({
    loginInvestor
})
