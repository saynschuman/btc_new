import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default (): void => {
    const checkToken = (): void => {
        if(cookies.get('token') === undefined) {
            window.location.replace('/')
        }
    }
    window.setInterval(checkToken, 1000)
}