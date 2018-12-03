const LOGIN_INVETSOR_REQUEST = 'LOGIN_INVETSOR_REQUEST'
const LOGIN_INVETSOR_RESPONSE = 'LOGIN_INVETSOR_RESPONSE'

const initialState = {
    isLoading: false,
    isLoaded: false,
    logged: false,
    showError: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_INVETSOR_REQUEST:
            return { ...state, isLoading: true, isLoaded: false };
    }

}