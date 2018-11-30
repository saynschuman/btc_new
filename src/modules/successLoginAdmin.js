const START_LOGIN_ADMIN = 'START_LOGIN_ADMIN'
const SUCCESS_LOGIN_ADMIN = 'SUCCESS_LOGIN_ADMIN'
const ERROR_LOGIN_ADMIN = 'ERROR_LOGIN_ADMIN'

const initialState = {
  successLoginAdmin: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_LOGIN_ADMIN:
      return { ...state, successLoginAdmin: true }
    case ERROR_LOGIN_ADMIN:
      return { ...state, successLoginAdmin: false }
    default:
      return state
  }
}

export const successLoginAdmin = token => dispatch => {
  dispatch({
    type: START_LOGIN_ADMIN,
  })
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${token}`)
    .then(res => res.json())
    .then(res => localStorage.setItem('token', res.jwt))
    .then(() => dispatch({ type: SUCCESS_LOGIN_ADMIN }))
    .catch(() => dispatch({ type: ERROR_LOGIN_ADMIN }))
}
