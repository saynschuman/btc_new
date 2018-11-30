import { REQUEST_AGREEMENT, RESPONSE_AGREEMENT } from '../constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  agreement: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AGREEMENT:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      }
    case RESPONSE_AGREEMENT:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        agreement: action.agreement,
      }
    default:
      return state
  }
}
