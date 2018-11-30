export const authenticate = token => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${token}`)
    .then(res => res.json())
    .then(res => localStorage.setItem('token', res.jwt))
    .catch(error => console.log(error))
}
