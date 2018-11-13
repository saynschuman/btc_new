import { REQUEST_PORTAL_NEWS, RESPONSE_PORTAL_NEWS } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  portalNews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PORTAL_NEWS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case RESPONSE_PORTAL_NEWS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        portalNews: action.portalNews
      };
    default:
      return state;
  }
}
