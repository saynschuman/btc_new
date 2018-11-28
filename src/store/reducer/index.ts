import { combineReducers } from "redux"
import {reducer} from "../modules/reducer"
import {repos} from "../modules/repos"

export default combineReducers({
    reducer,
    repos
})
