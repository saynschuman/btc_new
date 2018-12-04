import { post } from "../../helpers/apiClient"
import { investorLogin } from "../../helpers/login"

const LOGIN_INVETSOR_REQUEST = "LOGIN_INVETSOR_REQUEST"
const LOGIN_INVETSOR_SUCCESS = "LOGIN_INVETSOR_SUCCESS"
const LOGIN_INVETSOR_ERROR = "LOGIN_INVETSOR_ERROR"
const HIDE_POPUP = "HIDE_POPUP"

const initialState = {
  isLoading: false,
  isLoaded: false,
  logged: false,
  showError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INVETSOR_REQUEST:
      return { ...state, isLoading: true, isLoaded: false }
    case LOGIN_INVETSOR_SUCCESS:
      return { ...state, isLoading: false, isLoaded: true }
    case LOGIN_INVETSOR_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        logged: false,
        showError: true
      }
    case HIDE_POPUP:
      return { ...state, showError: false }
    default:
      return state
  }
}

export const loginInvestor = data => dispatch => {
  dispatch({
    type: LOGIN_INVETSOR_REQUEST
  })
  const promise = new Promise(resolve => {
    resolve(post("https://atc-bl.nadzor.online/bl198765/investor/login", data))
  })
  promise.then(response => {
    if (response.jwt) {
      investorLogin(response.jwt)
      dispatch({
        type: LOGIN_INVETSOR_SUCCESS
      })
    } else {
      dispatch({
        type: LOGIN_INVETSOR_ERROR
      })
    }
  })
}

export const hidePopup = () => {
  return {
    type: HIDE_POPUP
  }
}
