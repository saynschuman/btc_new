import { get } from "../../helpers/apiClient"
// const GET_INVESTMENTS_REQUEST = "GET_INVESTMENTS_REQUEST"
const GET_INVESTMENTS_RESPONSE = "GET_INVESTMENTS_RESPONSE"
// const GET_ACTIVE_INVESTMENTS_REQUEST = "GET_ACTIVE_INVESTMENTS_REQUEST"
const GET_ACTIVE_INVESTMENTS_RESPONSE = "GET_ACTIVE_INVESTMENTS_RESPONSE"
// const GET_WALLET_REQUEST = "GET_WALLET_REQUEST"
const GET_WALLET_RESPONSE = "GET_WALLET_RESPONSE"

const initialState = {
  investments: [],
  activeInvestments: [],
  walletOperations: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INVESTMENTS_RESPONSE:
      return {
        ...state,
        investments: action.payload
      }
    case GET_ACTIVE_INVESTMENTS_RESPONSE:
      return {
        state
      }
    case GET_WALLET_RESPONSE:
      return {
        state
      }
    default:
      return state
  }
}

export const getInvestments = () => dispatch => {
  const promise = new Promise(resolve => {
    resolve(
      get(
        "https://atc-bl.nadzor.online/bl198765/investor/reports/investments/?active=true"
      )
    )
  })
  promise.then(response => {
    dispatch({
      type: GET_INVESTMENTS_RESPONSE,
      payload: response
    })
  })
}
