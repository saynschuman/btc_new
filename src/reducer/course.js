import { GET_CORSE_REQUEST, GET_CORSE_RESPONSE } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  course: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CORSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case GET_CORSE_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        course: action.course
      };
    default:
      return state;
  }
}
