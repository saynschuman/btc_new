fetch("https://atc-bl.nadzor.online/bl198765/platform/ratesHistory?count=2")
  .then(res => res.json())
  .then(response => console.log(response));
