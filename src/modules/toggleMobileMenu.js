export const SHOW_MOBILE_MENU = 'SHOW_MOBILE_MENU'

const initialState = {
  mobileMenuIsOpen: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MOBILE_MENU:
      return { ...state, mobileMenuIsOpen: !state.mobileMenuIsOpen }
    default:
      return state
  }
}

export const toggleMobileMenu = () => {
  return {
    type: SHOW_MOBILE_MENU,
  }
}
