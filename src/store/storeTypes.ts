export interface LoginInvestor {
    isLoading: boolean
    isLoaded: boolean
    isLogged: boolean
    showError: boolean
}

export interface LoginInvestorParams {
    email: string
    password: string
}

export interface UserToken {
    jwt: string
}

export default interface IStore {
    loginInvestor: LoginInvestor
}
