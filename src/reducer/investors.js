import { INVESTORS_REQUEST, INVESTORS_RESPONSE } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  investorsList: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INVESTORS_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case INVESTORS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        investorsList: action.investorsList
      };
    default:
      return state;
  }
}
