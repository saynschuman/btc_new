import { get } from "../../helpers/apiClient"

const HOMEPAGE_GET_DATA_REQUEST = "HOMEPAGE_GET_DATA_REQUEST"
const HOMEPAGE_GET_DATA_SUCCESS = "HOMEPAGE_GET_DATA_REQUEST_SUCCESS"

const initialState = {
  isLoading: false,
  isLoaded: false,
  nHashRate: null,
  nEarnings: null,
  address: "",
  confirmedBalance: null,
  pendingBalance: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_GET_DATA_REQUEST:
      return { ...state, isLoading: true, isLoaded: false }
    case HOMEPAGE_GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        nHashRate: action.payload.nHashRate,
        nEarnings: action.payload.nEarnings,
        address: action.payload.address,
        confirmedBalance: action.payload.confirmedBalance,
        pendingBalance: action.payload.pendingBalance
      }
    default:
      return state
  }
}

export const investorHomePageGetData = () => dispatch => {
  dispatch({
    type: HOMEPAGE_GET_DATA_REQUEST
  })
  const promise = new Promise(resolve => {
    resolve(get("https://atc-bl.nadzor.online/bl198765/investor/"))
  })
  promise.then(response => {
    dispatch({
      type: HOMEPAGE_GET_DATA_SUCCESS,
      payload: {
        nHashRate: response.nHashRate,
        nEarnings: response.nEarnings,
        address: response.address,
        confirmedBalance: response.balance.confirmedBalance,
        pendingBalance: response.balance.pendingBalance
      }
    })
  })
}
