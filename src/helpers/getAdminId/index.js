import { parseJwt } from "../parseJwt"

export const renderId = () => {
  if (
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token").length > 0
  ) {
    return parseJwt(localStorage.getItem("token")).id.slice(0, 7)
  } else {
    return
  }
}