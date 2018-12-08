const HASHRATE_PRICE = 'HASHRATE_PRICE'

const initialState = {
  hashRatePrice: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HASHRATE_PRICE:
      return {
        ...state,
        hashRatePrice: action.hashRatePrice,
      };
    default:
      return state;
  }
}

export const getHashRatePrice = () => dispatch => {
  fetch("https://atc-bl.nadzor.online/bl198765/platform/hashRatePrice")
    .then(res => res.json())
    .then(res => {
      return dispatch({ type: HASHRATE_PRICE, hashRatePrice: res });
    });
};