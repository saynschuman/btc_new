import {
  GET_CORSE_HISTORY_REQUEST,
  GET_CORSE_HISTORY_RESPONSE
} from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  courseHistory: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CORSE_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case GET_CORSE_HISTORY_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        courseHistory: action.courseHistory
      };
    default:
      return state;
  }
}
