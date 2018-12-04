import Cookies from "universal-cookie"

export default () => {
  const cookies = new Cookies()
  cookies.remove("token")
  setTimeout(() => window.location.replace("/"), 500)
}