import { ADMINS_REQUEST, ADMINS_RESPONSE } from "../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  adminList: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMINS_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case ADMINS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        adminList: action.adminList
      };
    default:
      return state;
  }
}
