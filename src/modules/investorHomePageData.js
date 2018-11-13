import { getInvestorDataFromServer } from '../mocks/api'

const REQUEST_INVESTOR_DATA = 'REQUEST_INVESTOR_DATA'
const RESPONSE_INVESTOR_DATA = 'RESPONSE_INVESTOR_DATA'
const ERROR_INVESTOR_DATA = 'ERROR_INVESTOR_DATA'

const initialState = {
  dataIsLoading: false,
  dataIsLoaded: false,
  notAuthorized: false,
  data: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_INVESTOR_DATA:
      return {
        ...state,
        dataIsLoading: true,
      }
    case RESPONSE_INVESTOR_DATA:
      return {
        ...state,
        dataIsLoading: false,
        dataIsLoaded: true,
        data: action.payload.data,
      }
    case ERROR_INVESTOR_DATA:
      return {
        ...state,
        dataIsLoading: false,
        dataIsLoaded: true,
        notAuthorized: true,
      }
    default:
      return state
  }
}

export const investorHomePageData = token => dispatch => {
  dispatch({
    type: REQUEST_INVESTOR_DATA,
  })
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getInvestorDataFromServer(token))
    }, 2000)
  })

  promise
    .then(res => {
      return dispatch({
        type: RESPONSE_INVESTOR_DATA,
        payload: {
          data: res,
        },
      })
    })
    .catch(() => {
      dispatch({
        type: ERROR_INVESTOR_DATA,
      })
    })
}
