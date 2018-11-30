import {
  AUTH_REQUEST,
  AUTH_RESPONSE,
  AUTH_ERROR,
  AUTH_INVESTOR_REQUEST,
  AUTH_INVESTOR_RESPONSE,
  AUTH_INVESTOR_ERROR,
  AUTH_HIDE,
  INVESTOR_AUTH_HIDE
} from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  success: null,
  investorLogIsloading: false,
  investorLogIsloaded: false,
  investorSuccess: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case AUTH_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: action.success
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        success: action.success
      };
    case AUTH_INVESTOR_REQUEST:
      return {
        ...state,
        investorLogIsloading: true,
        investorLogIsloaded: false
      };
    case AUTH_INVESTOR_RESPONSE:
      return {
        ...state,
        investorLogIsloading: false,
        investorLogIsloaded: true,
        investorSuccess: action.investorSuccess
      };
    case AUTH_INVESTOR_ERROR:
      return {
        ...state,
        investorLogIsloading: false,
        investorLogIsloadied: true,
        investorSuccess: action.investorSuccess
      };
    case AUTH_HIDE:
      return {
        ...state,
        success: null
      };
    case INVESTOR_AUTH_HIDE:
      return {
        ...state,
        investorSuccess: null
      };
    default:
      return state;
  }
}
