export const parseJwt = token => {
  if (token !== null) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  } else {
    return 'not auth'
  }
}
