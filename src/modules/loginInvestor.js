const AUTH_INVESTOR_REQUEST = 'AUTH_INVESTOR_REQUEST'
const AUTH_INVESTOR_RESPONSE = 'AUTH_INVESTOR_RESPONSE'
const AUTH_INVESTOR_ERROR = 'AUTH_INVESTOR_ERROR'

const initialState = {
  isLoading: false,
  isLoaded: false,
  success: null,
  dataIsLoading: false,
  dataIsLoaded: false,
  data: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_INVESTOR_REQUEST:
      return { ...state, isLoading: true, isLoaded: false }
    case AUTH_INVESTOR_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: true,
      }
    case AUTH_INVESTOR_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: false,
      }
    default:
      return state
  }
}

export const authDataInvestor = data => dispatch => {
  dispatch({
    type: AUTH_INVESTOR_REQUEST,
  })

  fetch('https://atc-bl.nadzor.online/bl198765/investor/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.id,
      password: data.password,
    }),
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: AUTH_INVESTOR_RESPONSE,
        investorSuccess: true,
      })
    })
    .catch(() => {
      dispatch({
        type: AUTH_INVESTOR_ERROR,
      })
    })
}
