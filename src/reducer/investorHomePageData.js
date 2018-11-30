import { RESPONSE_iNVESTOR_DATA } from '../constants'

const initialState = {
  investorHomePageData: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case RESPONSE_iNVESTOR_DATA:
      return {
        ...state,
        investorHomePageData: action.payload.investorHomePageData
      }
    default:
      return state
  }
}
