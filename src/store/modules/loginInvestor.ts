import { asyncFactory } from 'typescript-fsa-redux-thunk'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { LoginInvestor, LoginInvestorParams, UserToken } from '../storeTypes'
import { increment } from './reducer'

const INITIAL_STATE: LoginInvestor = {
  isLoading: false,
  isLoaded: false,
  isLogged: false,
  showError: false
}

const ACF = actionCreatorFactory()

export const closeModal = ACF<string>("CLOSE_MODAL");

export const asyncACF = asyncFactory<LoginInvestor>(ACF)

export const loginInvestor = asyncACF<LoginInvestorParams, UserToken>(
  'LOGIN_INVESTOR',
  async params => {
    const url = `https://atc-bl.nadzor.online/bl198765/investor/login`
    const options: RequestInit = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email,
        password: params.password,
      }),
    }
    const res = await fetch(url, options)
      .then(res => res.json())
      .catch(error => console.log(error))
    return res
  }
)

export default reducerWithInitialState(INITIAL_STATE)
  .case(loginInvestor.async.started, state => ({
    ...state,
    isLoading: true,
  }))
  .case(loginInvestor.async.done, (state, payload) => {
    if (payload.result) {
      console.log(payload.result)
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLogged: true
      }
    } else {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLogged: false,
        showError: true
      }
    }
  })
  .case(closeModal, state => ({ ...state, showError: false}))