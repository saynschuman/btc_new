import { post } from "../../helpers/apiClient"

const LOGIN_INVETSOR_REQUEST = "LOGIN_INVETSOR_REQUEST"
const LOGIN_INVETSOR_SUCCESS = "LOGIN_INVETSOR_SUCCESS"
const LOGIN_INVETSOR_ERROR = "LOGIN_INVETSOR_ERROR"

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
    default:
      return state
  }
}

export const loginInvestor = data => dispatch => {
  dispatch({
    type: LOGIN_INVETSOR_REQUEST
  })
  const promise = new Promise(resolve => {
    // resolve(post("https://atc-bl.nadzor.online/bl198765/investor/login", data))
      resolve(Math.random())
  })

  promise.then(result => {
    if (result > 0.5) {
        console.log('more')
    } else {
        console.log('less')
    }
  })
}
