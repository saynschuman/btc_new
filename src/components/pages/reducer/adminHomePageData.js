import {
  REQUEST_HOMEPAGE_DATA,
  RESPONSE_HOMEPAGE_DATA,
  ERROR_HOMEPAGE_DATA,
} from '../constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  adminHomePageData: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HOMEPAGE_DATA:
      return { ...state, isLoading: true, isLoaded: false }
    case RESPONSE_HOMEPAGE_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        adminHomePageData: action.payload.adminHomePageData,
      }
    case ERROR_HOMEPAGE_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: action.payload.isError,
      }
    default:
      return state
  }
}
