import Cookies from "universal-cookie"

export const investorLogin = token => {
  const cookies = new Cookies()
  cookies.set("token", token, { expires: new Date(Date.now() + 1000 * 10) })
  window.location.replace("/investor")
}
