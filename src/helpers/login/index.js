import Cookies from "universal-cookie"

export const investorLogin = () => {
  const cookies = new Cookies()
  cookies.set("token", "111", { expires: new Date(Date.now() + 1000 * 3) })
  window.location.replace("/investor")
}
