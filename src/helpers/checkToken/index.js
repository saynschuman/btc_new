import Cookies from "universal-cookie"

export default () => {
  const cookies = new Cookies()
  const checkToken = () => {
    if (cookies.get("token") === undefined) {
      window.location.replace("/")
    }
  }
  window.setInterval(checkToken, 1000)
}
