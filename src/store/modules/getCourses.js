const GET_CORSE_HISTORY_REQUEST = 'GET_CORSE_HISTORY_REQUEST'
const GET_CORSE_HISTORY_RESPONSE = 'GET_CORSE_HISTORY_RESPONSE'

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

export const getCourseHistory = () => dispatch => {
  dispatch({
    type: GET_CORSE_HISTORY_REQUEST
  });
  fetch("https://atc-bl.nadzor.online/bl198765/platform/ratesHistory?count=7")
    .then(res => res.json())
    .then(res => {
      return dispatch({ type: GET_CORSE_HISTORY_RESPONSE, courseHistory: res });
    });
};