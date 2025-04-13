fetch("https://house-plants2.p.rapidapi.com/all-lite", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5bda55fb28msh7505d5d7a16332fp1186d4jsn45f4eaba70db",
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
  