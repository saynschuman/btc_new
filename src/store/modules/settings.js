import { put } from "../../helpers/apiClient"
import Cookies from "universal-cookie"

const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST"
const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD"
const CHANGE_INFO_REQUEST = "CHANGE_INFO_REQUEST"
const CHANGE_INFO_SUCCESS = "CHANGE_INFO_SUCCESS"
const HIDE_POPUP = "HIDE_POPUP"

const initialState = {
  statusText: "",
  infoChangeText: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, statusText: action.statusText }
    case CHANGE_INFO_SUCCESS:
      return { ...state, infoChangeText: action.infoChangeText }
    case HIDE_POPUP:
      return { ...state, statusText: "", infoChangeText: "" }
    default:
      return state
  }
}

export const changePassword = data => dispatch => {
  dispatch({
    type: CHANGE_PASSWORD_REQUEST
  })
  const cookies = new Cookies()
  return fetch(
    "https://atc-bl.nadzor.online/bl198765/investor/profile/changePassword",
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("token")}`
      },
      body: JSON.stringify(data)
    }
  ).then(res => {
    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      statusText: res.statusText
    })
  })
}

export const setInfo = data => dispatch => {
  dispatch({
    type: CHANGE_INFO_REQUEST
  })
  const cookies = new Cookies()
  return fetch(
    "https://atc-bl.nadzor.online/bl198765/investor/profile/introduce",
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("token")}`
      },
      body: JSON.stringify(data)
    }
  ).then(res => {
    dispatch({
      type: CHANGE_INFO_SUCCESS,
      infoChangeText: res.statusText
    })
  })
}


export const changePhone = data => dispatch => {
  dispatch({
    type: CHANGE_INFO_REQUEST
  })
  const cookies = new Cookies()
  return fetch(
    "https://atc-bl.nadzor.online/bl198765/investor/profile/setPhoneNumber",
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("token")}`
      },
      body: JSON.stringify(data)
    }
  ).then(res => {
    dispatch({
      type: CHANGE_INFO_SUCCESS,
      infoChangeText: res.statusText
    })
  })
}
