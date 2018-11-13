export const PIN = 'PIN'

const initialState = {
  isPinned: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PIN:
      return { ...state, isPinned: !state.isPinned }
    default:
      return state
  }
}

export const pin = () => {
  return {
    type: PIN,
  }
}
