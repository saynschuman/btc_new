export const post = (url, data) => {
    console.log(data);
    fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "email": "invest",
        "password": "123123"
    })
  })
    .then(res => res.json())
    .catch(error => console.log(error))
}
