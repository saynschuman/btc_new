const SHOW_INVEST = "SHOW_INVEST"
const SHOW_WITHDRAWAL = "SHOW_WITHDRAWAL"
const SHOW_SELL = "SHOW_SELL"
const HIDE_POPUP = "HIDE_POPUP"

const initialState = {
  showInvest: false,
  showWithdrawal: false,
  showSell: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INVEST: {
      return {
        ...state,
        showInvest: true
      }
    }
    case SHOW_WITHDRAWAL: {
      return {
        ...state,
        showWithdrawal: true
      }
    }
    case SHOW_SELL: {
      return {
        ...state,
        showSell: true
      }
    }
    case HIDE_POPUP: {
      return {
        ...state,
        showInvest: false,
        showWithdrawal: false,
        showSell: false
      }
    }
    default:
      return state
  }
}

export const showInvest = () => ({ type: SHOW_INVEST })
export const showWithdrawal = () => ({ type: SHOW_WITHDRAWAL })
export const showSell = () => ({ type: SHOW_SELL })
export const hide = () => ({ type: HIDE_POPUP })
