const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST'
const GET_COURSE_RESPONSE = 'GET_COURSE_RESPONSE'

const initialState = {
  isLoading: false,
  isLoaded: false,
  course: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case GET_COURSE_RESPONSE:
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


export const getCourse = () => dispatch => {
  dispatch({
    type: GET_COURSE_REQUEST
  });
  fetch("https://atc-bl.nadzor.online/bl198765/platform/rates")
    .then(res => res.json())
    .then(res => {
      return dispatch({ type: GET_COURSE_RESPONSE, course: res });
    });
};
