import { getInvestorDataFromServer } from '../mocks/api'

const REQUEST_INVESTOR_DATA = 'REQUEST_INVESTOR_DATA'
const RESPONSE_INVESTOR_DATA = 'RESPONSE_INVESTOR_DATA'
const ERROR_INVESTOR_DATA = 'ERROR_INVESTOR_DATA'

const initialState = {
  dataIsLoading: false,
  dataIsLoaded: false,
  authorized: 'not checked',
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
        authorized: true,
        data: action.payload.data,
      }
    case ERROR_INVESTOR_DATA:
      return {
        ...state,
        dataIsLoading: false,
        dataIsLoaded: true,
        authorized: 'notAuthorized',
      }
    default:
      return state
  }
}

export const investorHomePageData = token => dispatch => {
  dispatch({
    type: REQUEST_INVESTOR_DATA,
  })

  fetch('https://atc-bl.nadzor.online/bl198765/investor/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      if (res.status !== 401) {
        return dispatch({
          type: RESPONSE_INVESTOR_DATA,
          payload: {
            data: res,
          },
        })
      }
      if (res.status === 404) {
        return dispatch({
          type: RESPONSE_INVESTOR_DATA,
          payload: {
            data: res,
          },
        })
      } else {
        dispatch({
          type: ERROR_INVESTOR_DATA,
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}
