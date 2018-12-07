import Cookies from "universal-cookie"

export const post = (url, data) => {
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(error => error)
}


export const forgotPost = (url, data) => {
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res)
}

export const get = url => {
  const cookies = new Cookies()
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies.get('token')}`
    }
  })
    .then(res => res.json())
    .catch(error => error)
}

export const put = (url, data) => {
  const cookies = new Cookies()
  return fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies.get('token')}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.status === 200) {
        return true
      } else {
        return false
      }
    })
}